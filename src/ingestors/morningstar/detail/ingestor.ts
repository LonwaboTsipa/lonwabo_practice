import * as xmlParser from "xml2json";
import { IManifest, IPropertyDescriptor } from "@kurtosys/udm_data_toolkit";
import { IFundOrShareClass, IApiManifest, IBatchPromiseElement, IOrchestratedManifest } from "../../../models";
import { callApi, safe, batchExecutePromises, getPropertyValue, isNullOrWhitespace, isNullOrUndefined, convertXmlToJson, isNumeric, groupBy } from "../../../utils";
import { ingestMorningStarHistoricalPerformance, ingestMorningStarRiskAndRating, ingestMorningStarFundBasics, ingestMorningStarShareClassBasics,
	ingestMorningStarTrailingPerformance, ingestMorningStarPortfolioStatistics } from "./utils";
import { parserOptions } from "./parserOptions";
import { IInternalDetail } from "../models";
import { document } from "./model";
import { mappings } from "./mappings";

const XSD_PATH = 'artifacts/static/morningstar/xsd/FundShareClass.xsd';
let t: document;

export async function ingestMorningStarDetails(funds: IFundOrShareClass[], manifest: IOrchestratedManifest, internalDetailsManifestItem: IManifest): Promise<IOrchestratedManifest> {

	let batchPromiseElements: IBatchPromiseElement[] = [];
	let detailsByInternalId: { [property: string]: IInternalDetail } = (internalDetailsManifestItem.orchestratedData as IInternalDetail[]).reduce((existing, current) => {
		existing[current.internal_id] = current;
		return existing;
	}, {});
	let detailManifestItem = manifest['morningstarDetails'];
	for (let internalDetail of (internalDetailsManifestItem.orchestratedData as IInternalDetail[])) {
		let urlParameters = { content: internalDetail.updated_content, morningStarInternalId: internalDetail.internal_id };
		batchPromiseElements.push({
			identifier: internalDetail,
			promiseFunc: () => callApi(detailManifestItem as IApiManifest, { urlParameters, dontParseBodyAsJson: true }, true),
			responseFunc: (response, identifier) => {
				if (!isNullOrWhitespace(response)) {
					try {
						// xml to json
						let json = convertXmlToJson(response, XSD_PATH, parserOptions, { tagPrefix: 'xsd:' }) as document;
						let dataObj = {};
						let internalId = json.FundShareClass.Id;
						let shareClass = detailsByInternalId[internalId];
						ingestMorningStarFundBasics(json, shareClass, manifest);
						ingestMorningStarShareClassBasics(json, shareClass, manifest);
						ingestMorningStarPortfolioStatistics(json, shareClass, manifest);
						ingestMorningStarHistoricalPerformance(json, shareClass, manifest);
						ingestMorningStarTrailingPerformance(json, shareClass, manifest);
						ingestMorningStarRiskAndRating(json, shareClass, manifest);

						//response.values = performanceDetails;
					}
					catch (e) {
						console.log(`Error getting performance from morning star: ${e.message}`);
						throw new Error(e);
					}
				}
			}
		})
	}
	if (batchPromiseElements && batchPromiseElements.length > 0) {
		await batchExecutePromises(batchPromiseElements);
	}
	return manifest;
}