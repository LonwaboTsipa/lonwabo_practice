import { IInternalDetail } from "../../models";
import { document } from "../model";
import { IOrchestratedManifest } from "../../../../models";
import { safe, isNullOrUndefined, isNumeric, groupBy } from "../../../../utils";
import * as changeCase from "change-case";

export function ingestMorningStarRiskAndRating(json: document, shareClass: IInternalDetail, manifest: IOrchestratedManifest) {
	// This is to shorten the code and cater for index processing later
	let riskAndRating = safe(() => json.FundShareClass.ClassPerformance.Performance.TrailingPerformance.RiskAndRating, null);
	let riskAndRatingStatistics = [];
	if (riskAndRating) {
		let starRating = riskAndRating.StarRating;
		if (starRating) {
			let asOfDate = starRating.EndDate;
			let ratingDetails = starRating.RatingDetail;


			ratingDetails.map((ratingDetail) => {
				Object.keys(ratingDetail).filter(key => typeof ratingDetail[key] === 'object').map(key => {
					let childElement = ratingDetail[key];
					childElement['clientCode'] = shareClass.isin;
					childElement['RatingType'] = changeCase.snake(key);
					childElement['TimePeriod'] = ratingDetail.TimePeriod;
					childElement['RatingTypeNumber'] = ratingDetail.Type;
					childElement['EndDate'] = asOfDate;
					riskAndRatingStatistics.push(childElement);
				});
			});
		}
	}
	if (riskAndRatingStatistics && riskAndRatingStatistics.length > 0) {
		let manifestItem = manifest['morningstarRiskAndRating'];
		if (!manifestItem.orchestratedData) {
			manifestItem.orchestratedData = [];
		}		
		manifestItem.orchestratedData.push(...riskAndRatingStatistics);		
	}
	return manifest;
}