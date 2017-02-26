import { IInternalDetail } from "../../models";
import { document } from "../model";
import { IOrchestratedManifest } from "../../../../models";
import { safe, isNullOrUndefined, isNumeric, groupBy } from "../../../../utils";
import * as changeCase from "change-case";

export function ingestMorningStarFundBasics(json: document, shareClass: IInternalDetail, manifest: IOrchestratedManifest) {
	// This is to shorten the code and cater for index processing later
	let fundBasics = safe(() => json.FundShareClass.Fund.FundBasics, null);
	let fundBasicStatistics = [];
	if (fundBasics) {	
		fundBasics['clientCode'] = shareClass.isin;	
		fundBasicStatistics.push(fundBasics);
	}
	if (fundBasicStatistics && fundBasicStatistics.length > 0) {
		let manifestItem = manifest['morningstarFundBasics'];
		if (!manifestItem.orchestratedData) {
			manifestItem.orchestratedData = [];
		}		
		manifestItem.orchestratedData.push(...fundBasicStatistics);		
	}
	return manifest;
}