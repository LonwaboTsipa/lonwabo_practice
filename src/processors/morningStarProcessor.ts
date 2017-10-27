import { ingestAllMorningstar } from "../ingestors";
import { dataLoadingArray } from "@kurtosys/udm_data_toolkit";
import { IFundOrShareClass } from "../models";
import { isNullOrUndefined, isNullOrEmpty, processValueCollection, safe } from "../utils";
let statisticsProperties = require("../../artifacts/config/core_data/statistic_properties");
let statisticsMapping = require("../../artifacts/config/mapping/statistics");
let timeseriesProperties = require("../../artifacts/config/core_data/timeseries_properties");
let timeseriesMapping = require("../../artifacts/config/mapping/timeseries");

export async function processMorningStar(funds: IFundOrShareClass[], manifest: {}): Promise<dataLoadingArray> {
	let response = new dataLoadingArray();
	let morningStarManifest = await ingestAllMorningstar(funds);
	if (!response.timeseries) {
		response.timeseries = [];
	}
	if (!response.statistics) {
		response.statistics = [];
	}
	// Prepare dataToProcess for Timeseries here
	let dataToProcess = safe(() => morningStarManifest['morningstarDailyPrices'].orchestratedData, []);
		// Add processing logic here
	if (!isNullOrEmpty(dataToProcess)) {
		response.timeseries.push(...processValueCollection('morning_star_daily_prices', dataToProcess, timeseriesProperties, timeseriesMapping, false, "DAILY"));
	}

	// Prepare dataToProcess for Timeseries here
	dataToProcess = safe(() => morningStarManifest['morningstarHistoricalPerformance'].orchestratedData, []);
		// Add processing logic here
	if (!isNullOrEmpty(dataToProcess)) {
		response.timeseries.push(...processValueCollection('morning_star_historic_prices', dataToProcess, timeseriesProperties, timeseriesMapping, false, "DAILY"));
	}

	dataToProcess = safe(() => morningStarManifest['morningstarFundBasics'].orchestratedData, []);

	// Add processing logic here
	if (!isNullOrEmpty(dataToProcess)) {
		response.statistics.push(...processValueCollection('morning_star_fund_basics', dataToProcess, statisticsProperties, statisticsMapping));
	}

	dataToProcess = safe(() => morningStarManifest['morningstarShareClassBasics'].orchestratedData, []);

	// Add processing logic here
	if (!isNullOrEmpty(dataToProcess)) {
		response.statistics.push(...processValueCollection('morning_star_share_class_basics', dataToProcess, statisticsProperties, statisticsMapping));
	}

	dataToProcess = safe(() => morningStarManifest['morningstarPortfolioStatistics'].orchestratedData, []);

	// Add processing logic here
	if (!isNullOrEmpty(dataToProcess)) {
		response.statistics.push(...processValueCollection('morning_star_portfolio_stats', dataToProcess, statisticsProperties, statisticsMapping));
	}

	dataToProcess = safe(() => morningStarManifest['morningstarTrailingPerformance'].orchestratedData, []);

	// Add processing logic here
	if (!isNullOrEmpty(dataToProcess)) {
		response.statistics.push(...processValueCollection('morning_star_trailing_perf', dataToProcess, statisticsProperties, statisticsMapping));
	}

	dataToProcess = safe(() => morningStarManifest['morningstarRiskAndRating'].orchestratedData, []);

	// Add processing logic here
	if (!isNullOrEmpty(dataToProcess)) {
		response.statistics.push(...processValueCollection('morning_star_risk_and_ratings', dataToProcess, statisticsProperties, statisticsMapping));
	}

	// morningstarInternalDetails processing, this is to allow for the internal details about the share classes
	// to be loaded once and not every time. In other loaders this might be added directly to the propertiesPub
	// but this can cause a problem with the internal details are run without being able to access morningStar
	dataToProcess = safe(() => morningStarManifest['morningstarInternalDetails'].orchestratedData, []);

	// Add processing logic here
	if (!isNullOrEmpty(dataToProcess)) {
		response.statistics.push(...processValueCollection('morning_star_internal_details', dataToProcess, statisticsProperties, statisticsMapping));
	}

	return response;
}