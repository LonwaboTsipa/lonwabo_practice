import { login, dataLoadingArray, getClient, IManifest, IBaseEntity, LOADER_CONFIG } from "@kurtosys/udm_data_toolkit";
import { processAllocations, processFunds, processShareClasses, processTimeseries } from "../processors";
import { fetchFunds, fetchShareClasses } from "../services";
import { IOrchestratedManifest, IFundOrShareClass, IApiManifest, IMorningStarIngestionIndication } from "../models";
import { orchestrateManifest, callApi, safe, isNullOrUndefined, isNullOrWhitespace } from "../utils";

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
	if (morningStarIngestion.details && morningStarManifest['morningstarDetails']) {
		morningStarManifest = await ingestMorningStarDetails(funds, morningStarManifest, morningStarManifest['morningstarInternalDetails']);
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
				promises.push(callApi(manifestItem as IApiManifest, { urlParameters, dontParseBodyAsJson: true }));
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

export async function ingestMorningStarDetails(funds: IFundOrShareClass[], manifest: IOrchestratedManifest, internalDetailsManifestItem: IManifest): Promise<IOrchestratedManifest> {

	let promises = [];
	let detailsByInternalId = (internalDetailsManifestItem.orchestratedData as { isin: string; internal_id: string; }[]).reduce((existing, current) => {
		existing[current.internal_id] = current;
		return existing;
	}, {});
	let detailManifestItem = manifest['morningstarDetails'];
	for (let internalDetail of (internalDetailsManifestItem.orchestratedData as { isin: string; internal_id: string; }[])) {
		let urlParameters = { morningStarInternalId: internalDetail.internal_id };
		promises.push(callApi(detailManifestItem as IApiManifest, { urlParameters, dontParseBodyAsJson: true }));
	}


	if (promises.length > 0) {
		let detailResponses = [];
		const batchSize = 100;
		while (promises.length > 0) {
			let currentBatchSize = Math.min(batchSize, promises.length);
			let currentBatch = promises.splice(0, currentBatchSize);
			let batchResponses = await Promise.all(currentBatch);
			detailResponses.push(...batchResponses);
		}

		for (let detailResponse of detailResponses) {
			if (!isNullOrWhitespace(detailResponse)) {
				try {
					let doc = new DOMParser().parseFromString(detailResponse);
					let fundShareClassXPath = '//Index/FundShareClass';
					let fundShareClassNode = xpath.select(fundShareClassXPath, doc);
					let internalId = fundShareClassNode;

					let shareClass = detailsByInternalId[internalId];
					ingestMorningStarHistoricalPerformance(doc, shareClass, manifest);

					//response.values = performanceDetails;
				}
				catch (e) {
					console.log(`Error getting performance from morning star: ${e.message}`);
				}
			}
		}
	}
	return manifest;
}

export function ingestMorningStarHistoricalPerformance(detailXml: any, shareClass: IFundOrShareClass, manifest: IOrchestratedManifest) {
	let doc = new DOMParser().parseFromString(detailXml);
    let historicalPerformanceXPath = '//Index/IndexPerformance/Performance/HistoricalPerformance/HistoricalPerformanceDetail/ReturnHistory/Return[@Type="6"][ReturnDetail/@TimePeriod="M1" or ReturnDetail/@TimePeriod="MI"]';
	let historicalPerformanceDetailXml = xpath.select(historicalPerformanceXPath, doc);

	let performanceDetails = [];
	if (historicalPerformanceDetailXml) {
		for (let childNode of historicalPerformanceDetailXml) {
			let performanceDetail = {
				"date": xpath.select('EndDate/text()', childNode).toString(),
				"percent": parseFloat(xpath.select('ReturnDetail/Value/text()', childNode).toString())
			};
			performanceDetails.push(performanceDetail);
		}
	}
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
