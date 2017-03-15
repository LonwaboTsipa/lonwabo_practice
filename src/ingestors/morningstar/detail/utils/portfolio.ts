import { IInternalDetail } from "../../models";
import { document } from "../model";
import { IOrchestratedManifest } from "../../../../models";
import { safe, isNullOrUndefined, isNumeric, groupBy } from "../../../../utils";
import * as changeCase from "change-case";

export function ingestMorningStarPortfolio(json: document, shareClass: IInternalDetail, manifest: IOrchestratedManifest) {
	ingestMorningStarPortfolioStatistics(json, shareClass, manifest);
}

export function ingestMorningStarPortfolioStatistics(json: document, shareClass: IInternalDetail, manifest: IOrchestratedManifest) {
	// This is to shorten the code and cater for index processing later
	let portfolioStatistics = [];
	let portfolio = safe(() => json.FundShareClass.Fund.PortfolioList.Portfolio, null);
	if (portfolio && portfolio.PortfolioStatistics && Array.isArray(portfolio.PortfolioStatistics)) {
		for (let porfolioStatistic of portfolio.PortfolioStatistics) {
			porfolioStatistic['clientCode'] = shareClass.isin;
			portfolioStatistics.push(porfolioStatistic);
		}
	}

	if (portfolioStatistics && portfolioStatistics.length > 0) {
		let manifestItem = manifest['morningstarPortfolioStatistics'];
		if (!manifestItem.orchestratedData) {
			manifestItem.orchestratedData = [];
		}
		manifestItem.orchestratedData.push(...portfolioStatistics);
	}
	return manifest;
}