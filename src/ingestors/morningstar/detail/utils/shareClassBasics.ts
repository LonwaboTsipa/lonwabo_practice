import { IInternalDetail } from "../../models";
import { document } from "../model";
import { IOrchestratedManifest } from "../../../../models";
import { safe, isNullOrUndefined, isNumeric, groupBy } from "../../../../utils";
import * as changeCase from "change-case";

export function ingestMorningStarShareClassBasics(json: document, shareClass: IInternalDetail, manifest: IOrchestratedManifest) {
	// This is to shorten the code and cater for index processing later
	let shareClassBasics = safe(() => json.FundShareClass.Operation.ShareClassBasics, null);
	let shareClassBasicStatistics = [];
	if (shareClassBasics) {	
		shareClassBasics['clientCode'] = shareClass.isin;	
		shareClassBasicStatistics.push(shareClassBasics);
	}
	if (shareClassBasicStatistics && shareClassBasicStatistics.length > 0) {
		let manifestItem = manifest['morningstarShareClassBasics'];
		if (!manifestItem.orchestratedData) {
			manifestItem.orchestratedData = [];
		}		
		manifestItem.orchestratedData.push(...shareClassBasicStatistics);		
	}
	return manifest;
}