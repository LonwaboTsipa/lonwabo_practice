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

	// Prepare dataToProcess for Timeseries here
	let dataToProcess = safe(() => morningStarManifest['morningstarDailyPrices'].orchestratedData, []);	
		// Add processing logic here
	if (!isNullOrEmpty(dataToProcess)) {
		response.timeseries = processValueCollection('morning_star_daily_prices', dataToProcess, timeseriesProperties, timeseriesMapping, false, "DAILY");
	}
	
	// morningstarInternalDetails processing, this is to allow for the internal details about the share classes
	// to be loaded once and not every time. In other loaders this might be added directly to the propertiesPub
	// but this can cause a problem with the internal details are run without being able to access morningStar
	dataToProcess = safe(() => morningStarManifest['morningstarInternalDetails'].orchestratedData, []);
	
	// Add processing logic here
	if (!isNullOrEmpty(dataToProcess)) {		
		response.statistics = processValueCollection('morning_star_internal_details', dataToProcess, statisticsProperties, statisticsMapping);		
	}

	return response;
}