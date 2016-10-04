import { login, dataLoadingArray, getClient, IManifest, IBaseEntity } from "@kurtosys/udm_data_toolkit";
import {processAllocations, processFunds, processShareClasses, processTimeseries} from "../processors";
import {fetchFunds, fetchShareClasses} from "../services";
import { IOrchestratedManifest, IFundOrShareClass } from "../models";
import {orchestrateManifest, callApi, safe, isNullOrUndefined} from "../utils";

import * as xpath from "xpath";
import {parseString} from "xml2js";
import {DOMParser} from "xmldom";
import { Converter } from "csvtojson";

const rawMorningStarManifest = <IManifest[]>require("../artifacts/config/morningStarManifest");
const morningStarManifest = orchestrateManifest(rawMorningStarManifest.map(m => Object.assign({}, m)));

const mustIngest = {
	morningstarInternalDetails: true,
	morningstarDailyPrices: true
}


export async function ingestAll(funds: IFundOrShareClass[]): Promise<IOrchestratedManifest> {
	let morningStarManifest = orchestrateManifest(rawMorningStarManifest.map(m => Object.assign({}, m)));

	if (mustIngest.morningstarInternalDetails && morningStarManifest['morningstarInternalDetails']) {
		morningStarManifest['morningstarInternalDetails'] = await ingestMorningStarInternalDetails(funds, morningStarManifest['morningstarInternalDetails']);
	}
	if (mustIngest.morningstarDailyPrices && morningStarManifest['morningstarDailyPrices']) {
		morningStarManifest['morningstarDailyPrices'] = await ingestMorningStarDailyPrices(funds, morningStarManifest['morningstarDailyPrices'], morningStarManifest['morningstarInternalDetails']);
	}
	return morningStarManifest;
}

export async function ingestMorningStarInternalDetails(funds: IFundOrShareClass[], manifestItem: IManifest): Promise<IManifest> {
	manifestItem.orchestratedData = [];
	let promises = [];

	for (let fund of funds) {
		let isin = fund['propertiesPub']['isin']['value'];
		let internalDetailStatistic = safe(() => fund.statistics.filter(s => s.code === 'morningStarInternalDetails')[0].values[0], {});
		if (internalDetailStatistic && internalDetailStatistic['internal_id']) {
			manifestItem.orchestratedData.push(internalDetailStatistic);
		}
		else {
			let urlParameters = { isin };
			promises.push(callApi(manifestItem, { urlParameters }));
		}
	}
	if (promises.length > 0) {
		let responses = await Promise.all(promises);
		for (let text of responses) {
			let internalDetailObj = {};
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
						if (!err) {
							internalDetailObj[map.destinationField] = jsValue[map.sourceField];
						}
					});
				}
			}
			manifestItem.orchestratedData.push(internalDetailObj);
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
		promises.push(callApi(manifestItem, { urlParameters }));
	}

	if (promises.length > 0) {
		let dailyPriceResponses = await Promise.all(promises);
		let converter = new Converter({});
		for (let dailyPriceResponse of dailyPriceResponses) {
			await (new Promise((resolve, reject) => {
				converter.fromString(dailyPriceResponse, function (err, results) {
					// CHECK THIS ORDER
					results = results.sort((a, b) => {
						return new Date(a).getTime() - new Date(b).getTime();
					});
					let lastValue = 100;
					for (let result of results) {
						let resultInternalId = result['SecId'];
						let internalDetailObj = internalDetailsByInternalId[resultInternalId];
						let value = parseFloat(result['PreTaxNav']);
						if (internalDetailObj && !isNaN(value)) {
							let change = (value - lastValue) / lastValue * 100;
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