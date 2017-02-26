import { IInternalDetail } from "../../models";
import { document, returnTypeReturnDetailType } from "../model";
import { IOrchestratedManifest } from "../../../../models";
import { safe, isNullOrUndefined, isNumeric, groupBy } from "../../../../utils";

export function ingestMorningStarTrailingPerformance(json: document, shareClass: IInternalDetail, manifest: IOrchestratedManifest) {
	// This is to shorten the code and cater for index processing later
	let trailingPerformanceReturns = safe(() => json.FundShareClass.ClassPerformance.Performance.TrailingPerformance.TrailingReturn.Return, null);
	let trailingPerformances = [];
	if (trailingPerformanceReturns) {
		trailingPerformanceReturns.map((trailingPerformanceReturn) => {
			trailingPerformanceReturn["clientCode"] = shareClass.isin;
			let returnDetails = safe(() => trailingPerformanceReturn.ReturnDetail as returnTypeReturnDetailType[], null);
			if (returnDetails && returnDetails.length > 0) {
				returnDetails.map((currentReturn) => {
					trailingPerformanceReturn[currentReturn.TimePeriod] = currentReturn.Value;					
				});
				trailingPerformances.push(trailingPerformanceReturn);
			}
		});
	}
	if (trailingPerformances && trailingPerformances.length > 0) {
		let manifestItem = manifest['morningstarTrailingPerformance'];
		if (!manifestItem.orchestratedData) {
			manifestItem.orchestratedData = [];
		}		
		manifestItem.orchestratedData.push(...trailingPerformances);		
	}
	return manifest;
}