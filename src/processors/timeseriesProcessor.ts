import { dataLoadingArray } from "@kurtosys/udm_data_toolkit";
import { IFundOrShareClass } from "../models";
import { isNullOrUndefined, isNullOrEmpty, processValueCollection, safe } from "../utils";
let properties = require("../../artifacts/config/core_data/timeseries_properties");
let mapping = require("../../artifacts/config/mapping/timeseries");
export async function processTimeseries(funds: IFundOrShareClass[], manifest: {}) : Promise<dataLoadingArray> {
	let response = new dataLoadingArray();	
	if (!response.timeseries) {
		response.timeseries = [];
	}

	// Prepare dataToProcess for Timeseries here
	let dataToProcess = safe(() => manifest['timeseries'].orchestratedData, []);

	// Add processing logic here
	if (!isNullOrEmpty(dataToProcess)) {
		response.timeseries = processValueCollection(dataToProcess, properties, mapping, false);
	}
	
	return response;
}   