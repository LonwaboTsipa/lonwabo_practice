import { login, dataLoadingArray, getClient, IManifest, IBaseEntity, LOADER_CONFIG } from "@kurtosys/udm_data_toolkit";
import { processAllocations, processFunds, processShareClasses, processTimeseries } from "../processors";
import { fetchFunds, fetchShareClasses } from "../services";
import { IOrchestratedManifest, IFundOrShareClass, IApiManifest, IMorningStarIngestionIndication, IBatchPromiseElement } from "../models";
import { orchestrateManifest, callApi, safe, isNullOrUndefined, isNullOrWhitespace, batchExecutePromises } from "../utils";
import { ingestMorningStarInternalDetails, ingestMorningStarDetails } from "./morningstar"


import * as xpath from "xpath";
import { parseString } from "xml2js";
import { DOMParser } from "xmldom";
import { Converter } from "csvtojson";

import * as xmlParser from "xml2json";


const rawMorningStarManifest = <IManifest[]>require("../../artifacts/config/morningStarManifest");
const morningStarManifest = orchestrateManifest(rawMorningStarManifest.map(m => Object.assign({}, m)));

export async function ingestAllMorningstar(funds: IFundOrShareClass[]): Promise<IOrchestratedManifest> {
	let morningStarIngestion = (LOADER_CONFIG["originalConfig"]["morningStarIngestion"] || {}) as IMorningStarIngestionIndication;
	let morningStarManifest = orchestrateManifest(rawMorningStarManifest.map(m => Object.assign({}, m)));

	if (morningStarIngestion.internalDetails && morningStarManifest['morningstarInternalDetails']) {		
		morningStarManifest['morningstarInternalDetails'] = await ingestMorningStarInternalDetails(funds, morningStarManifest['morningstarInternalDetails']);
	}
	if (morningStarIngestion.details && morningStarManifest['morningstarDetails']) {
		morningStarManifest = await ingestMorningStarDetails(funds, morningStarManifest, morningStarManifest['morningstarInternalDetails']);
	}
	if (morningStarIngestion.dailyPrices && morningStarManifest['morningstarDailyPrices']) {
		morningStarManifest['morningstarDailyPrices'] = await ingestMorningStarDailyPrices(funds, morningStarManifest['morningstarDailyPrices'], morningStarManifest['morningstarInternalDetails']);
	}
	return morningStarManifest;
}



export async function ingestMorningStarDailyPrices(funds: IFundOrShareClass[], manifestItem: IManifest, internalDetailsManifestItem: IManifest): Promise<IManifest> {
	if (!manifestItem.orchestratedData) {
		manifestItem.orchestratedData = [];
	}

	let promises = [];
	let internalDetailsByInternalId = (internalDetailsManifestItem.orchestratedData as { isin: string; internal_id: string; }[]).reduce((existing, current) => {
		existing[current.internal_id] = current;
		return existing;
	}, {});

	for (let internalDetail of (internalDetailsManifestItem.orchestratedData as { isin: string; internal_id: string; }[])) {
		let urlParameters = { morningStarInternalId: internalDetail.internal_id };
		promises.push(callApi(manifestItem as IApiManifest, { urlParameters, dontParseBodyAsJson: true }));
	}

	if (promises.length > 0) {
		let dailyPriceResponses = await Promise.all(promises);

		for (let dailyPriceResponse of dailyPriceResponses) {

			await (new Promise((resolve, reject) => {
				let converter = new Converter({
					"delimiter": ";",
					"quote": "'"
				});
				converter.fromString(dailyPriceResponse, function (err, results) {
					// CHECK THIS ORDER
					results = results.sort((a, b) => {
						return new Date(a.Date).getTime() - new Date(b.Date).getTime();
					});
					
					let lastValue = 0;
					for (let result of results) {
						let resultInternalId = result['SecId'];
						let internalDetailObj = internalDetailsByInternalId[resultInternalId];
						let value = parseFloat(result['PreTaxNav']);
						if (internalDetailObj && !isNaN(value)) {
							let change = lastValue === 0 ? 0 : (value - lastValue) / lastValue * 100;
							let orchestratedObj = {
								isin: internalDetailObj.isin,
								value,
								change,
								date: result['Date']
							};
							lastValue = value;
							manifestItem.orchestratedData.push(orchestratedObj);
						}
					}
					resolve();
				});
			}));

		}

	}

	return manifestItem;

}
