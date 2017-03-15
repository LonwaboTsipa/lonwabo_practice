import { IManifest, IPropertyDescriptor } from "@kurtosys/udm_data_toolkit";
import { IFundOrShareClass, IApiManifest, IBatchPromiseElement } from "../../../models";
import { callApi, safe, batchExecutePromises, getPropertyValue, getProcessOptions, convertXmlToJson, isNullOrWhitespace } from "../../../utils";
import { parserOptions } from "./parserOptions";
import { document } from "./model";
import { mappings } from "./mappings";


const XSD_PATH = 'artifacts/static/morningstar/xsd/GetUniverse.xsd';


export async function ingestMorningStarInternalDetails(funds: IFundOrShareClass[], manifestItem: IManifest): Promise<IManifest> {
	manifestItem.orchestratedData = [];
	let batchPromiseElements: IBatchPromiseElement[] = [];
	const processOptions = getProcessOptions();
	for (let fund of funds) {
		let isin = safe(() => fund['propertiesPub']['isin']['value'], null);
		if (isin && isin !== '') {
			let urlParameters = { isin };
			let internalDetailStatistic = safe(() => fund.statistics.filter(s => s.code === 'morning_star_internal_details')[0].values[0], {});
			batchPromiseElements.push({
				identifier: internalDetailStatistic,
				promiseFunc: () => callApi(manifestItem as IApiManifest, { urlParameters, dontParseBodyAsJson: true }),
				responseFunc: async (response, identifier) => {
					// xml to json
					let json = convertXmlToJson(response, XSD_PATH, parserOptions) as document;
					let dataObj: { last_updated?: string; last_updated_nt?: string } = {};
					let shareClass = safe(() => json.FundShareClassList.ShareClass[0], null);
					if (shareClass) {						
						mappings.map(mapping => {
							dataObj[mapping.code] = getPropertyValue(shareClass, mapping as any as IPropertyDescriptor);
						});
						dataObj['last_updated_nt'] = JSON.stringify(shareClass.LastUpdated_NT);
						if (dataObj && Object.keys(dataObj).length > 0) {							
							// This checks if the last updated date is not equal to the last time we ran the loader
							// All of the other MorningStar™ ingestors will use the values in this manifestItems orchestratedData to 
							// continue their own ingestion. If there is no change nothing will be requested for the other ingestors.							
							const targetedTypes = [1,2,4];
							let targetContent = 0;
							if (processOptions.forceMorningstarUpdate || isNullOrWhitespace(identifier.last_updated_nt) || (isNullOrWhitespace(dataObj.last_updated_nt))) {								
								targetContent = targetedTypes.reduce((acc, type) => acc += type, 0);
							}
							else {								
								let existingUpdateTimes = JSON.parse(identifier.last_updated_nt);
								let currentUpdateTimes = JSON.parse(dataObj.last_updated_nt);
								let existingTargetTypeValues = existingUpdateTimes.filter(updateTime => targetedTypes.indexOf(updateTime['Type']) > -1);
								let currentTargetTypeValues = currentUpdateTimes.filter(updateTime => targetedTypes.indexOf(updateTime['Type']) > -1);
								existingTargetTypeValues.map(existing => {
									let current = safe(() => currentTargetTypeValues.filter(c => c.Type === existing.Type && c.Id === existing.Id)[0], null);									
									if (!current || current.content !== existing.content) {
										targetContent = targetContent | existing.Type;										
									}									
								})
							}
							dataObj['updated_content'] = targetContent;							
							if (!identifier || targetContent > 0) {
								manifestItem.orchestratedData.push(dataObj);
							}
						}
					}
				}
			})

		}
	}
	if (batchPromiseElements && batchPromiseElements.length > 0) {
		await batchExecutePromises(batchPromiseElements);
	}
	return manifestItem;

}

