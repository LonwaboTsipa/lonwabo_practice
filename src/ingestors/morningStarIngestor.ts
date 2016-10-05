import { login, dataLoadingArray, getClient, IManifest, IBaseEntity, LOADER_CONFIG } from "@kurtosys/udm_data_toolkit";
import { processAllocations, processFunds, processShareClasses, processTimeseries } from "../processors";
import { fetchFunds, fetchShareClasses } from "../services";
import { IOrchestratedManifest, IFundOrShareClass, IApiManifest, IMorningStarIngestionIndication } from "../models";
import { orchestrateManifest, callApi, safe, isNullOrUndefined } from "../utils";

import * as xpath from "xpath";
import { parseString } from "xml2js";
import { DOMParser } from "xmldom";
import { Converter } from "csvtojson";

const rawMorningStarManifest = <IManifest[]>require("../../artifacts/config/morningStarManifest");
const morningStarManifest = orchestrateManifest(rawMorningStarManifest.map(m => Object.assign({}, m)));


export async function ingestAllMorningstar(funds: IFundOrShareClass[]): Promise<IOrchestratedManifest> {
	let morningStarIngestion = (LOADER_CONFIG["originalConfig"]["morningStarIngestion"] || {}) as IMorningStarIngestionIndication;
	let morningStarManifest = orchestrateManifest(rawMorningStarManifest.map(m => Object.assign({}, m)));

	if (morningStarIngestion.internalDetails && morningStarManifest['morningstarInternalDetails']) {
		morningStarManifest['morningstarInternalDetails'] = await ingestMorningStarInternalDetails(funds, morningStarManifest['morningstarInternalDetails']);
	}
	if (morningStarIngestion.dailyPrices && morningStarManifest['morningstarDailyPrices']) {
		morningStarManifest['morningstarDailyPrices'] = await ingestMorningStarDailyPrices(funds, morningStarManifest['morningstarDailyPrices'], morningStarManifest['morningstarInternalDetails']);
	}
	return morningStarManifest;
}

export async function ingestMorningStarInternalDetails(funds: IFundOrShareClass[], manifestItem: IManifest): Promise<IManifest> {
	manifestItem.orchestratedData = [];
	let promises = [];
	
	for (let fund of funds) {
		let isin = safe(() => fund['propertiesPub']['isin']['value'], null);
		if (isin && isin !== '') {
			let internalDetailStatistic = safe(() => fund.statistics.filter(s => s.code === 'morning_star_internal_details')[0].values[0], {});
			if (internalDetailStatistic && internalDetailStatistic['internal_id']) {
				manifestItem.orchestratedData.push(internalDetailStatistic);
			}
			else {
				let urlParameters = { isin };
				promises.push(callApi(manifestItem as IApiManifest, { urlParameters, dontParseBodyAsJson:true }));
			}
		}

	}
	if (promises.length > 0) {
		let responses = await Promise.all(promises);
		for (let text of responses) {
			let internalDetailObj = null;
			let doc = new DOMParser().parseFromString(text);
			let xpathPrefix = "//FundShareClassList/ShareClass";
			let mapping = [
				{
					"sourceField": "ISIN",
					"destinationField": "isin"
				},
				{
					"sourceField": "Id",
					"destinationField": "internal_id"
				},
				{
					"sourceField": "MSCategoryId",
					"destinationField": "category_id"
				}
			];
			for (let map of mapping) {
				let xpathTarget = map['xpath'] || `${xpathPrefix}/${map.sourceField}`;
				let value = xpath.select(xpathTarget, doc);
				if (value) {
					parseString(value, (err, jsValue) => {
						if (!err && jsValue) {
							if (!internalDetailObj) {
								internalDetailObj = {};
							}
							internalDetailObj[map.destinationField] = jsValue[map.sourceField];
						}
					});
				}
			}
			if (internalDetailObj) {
				manifestItem.orchestratedData.push(internalDetailObj);
			}
			
		}
	}
	
	return manifestItem;

}

export async function ingestMorningStarDailyPrices(funds: IFundOrShareClass[], manifestItem: IManifest, internalDetailsManifestItem: IManifest): Promise<IManifest> {
	manifestItem.orchestratedData = [];
	let promises = [];
	let internalDetailsByInternalId = (internalDetailsManifestItem.orchestratedData as { isin: string; internal_id: string; }[]).reduce((existing, current) => {
		existing[current.internal_id] = current;
		return existing;
	}, {});

	for (let internalDetail of (internalDetailsManifestItem.orchestratedData as { isin: string; internal_id: string; }[])) {
		let urlParameters = { morningStarInternalId: internalDetail.internal_id };
		promises.push(callApi(manifestItem as IApiManifest, { urlParameters, dontParseBodyAsJson:true }));
	}

	if (promises.length > 0) {
		let dailyPriceResponses = await Promise.all(promises);
		let converter = new Converter({
            "delimiter": ";",
            "quote": "'"
        });
		for (let dailyPriceResponse of dailyPriceResponses) {
			
			await (new Promise((resolve, reject) => {
				converter.fromString(dailyPriceResponse, function (err, results) {
					// CHECK THIS ORDER
					results = results.sort((a, b) => {
						return new Date(a.Date).getTime() - new Date(b.Date).getTime();
					});
					console.log('results', results);
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