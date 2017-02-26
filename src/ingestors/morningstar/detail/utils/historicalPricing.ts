import { IInternalDetail } from "../../models";
import { document, returnTypeReturnDetailType } from "../model";
import { IOrchestratedManifest } from "../../../../models";
import { safe, isNullOrUndefined, isNumeric, groupBy } from "../../../../utils";

export function ingestMorningStarHistoricalPerformance(json: document, shareClass: IInternalDetail, manifest: IOrchestratedManifest) {
	// This is to shorten the code and cater for index processing later
	let historicalPerformanceDetails = safe(() => json.FundShareClass.ClassPerformance.Performance.HistoricalPerformance.HistoricalPerformanceDetail, null);
	let historicPrices = [];
	if (historicalPerformanceDetails) {
		historicalPerformanceDetails.map((historicalPerformanceDetail) => {
			let returns = safe(() => historicalPerformanceDetail.ReturnHistory.Return, null);
			if (returns && returns.length > 0) {
				returns.map((currentReturn) => {
					if (!isNullOrUndefined(currentReturn) &&
						!isNullOrUndefined(currentReturn.EndDate) &&
						!isNullOrUndefined(currentReturn.ReturnDetail) &&
						!isNullOrUndefined((currentReturn.ReturnDetail as returnTypeReturnDetailType).Value) &&
						isNumeric((currentReturn.ReturnDetail as returnTypeReturnDetailType).Value)) {
						// Add the currentReturn to the historicPrices array to load into the orchestrated data						
						historicPrices.push(currentReturn);
						currentReturn["clientCode"] = shareClass.isin;
					}
				});
			}
		});
	}
	if (historicPrices && historicPrices.length > 0) {
		let manifestItem = manifest['morningstarHistoricalPerformance'];
		if (!manifestItem.orchestratedData) {
			manifestItem.orchestratedData = [];
		}
		historicPrices = historicPrices.sort((a, b) => {
			let aDate = new Date(a.EndDate).getTime();
			let bDate = new Date(b.EndDate).getTime();
			return aDate - bDate;
		});

		// Calculate change percentages
		let historicPricesByType = groupBy(historicPrices, (historicPrice) => historicPrice.Type);
		Object.keys(historicPricesByType).map(type => {
			let historicPricesByTypeGrouping = historicPricesByType[type];
			let historicPricesByPeriod = groupBy(historicPricesByTypeGrouping, (item) => safe(() => item.ReturnDetail.TimePeriod, "NO_PERIOD"));
			Object.keys(historicPricesByPeriod).map(period => {
				let previousValue = null;
				let periodValues = historicPricesByPeriod[period];
				periodValues.map(periodValue => {
					let { ReturnDetail } = periodValue;
					let { Value } = ReturnDetail;
					if (isNullOrUndefined(previousValue)) {
						previousValue = Value;
					}
					else {
						periodValue.change = (Value - previousValue)/ Math.abs(previousValue) * 100;
						previousValue = Value;
					}
				});

			});
		});
		manifestItem.orchestratedData.push(...historicPrices);		
	}
	return manifest;
}