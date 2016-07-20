import { dataLoadingArray } from "@kurtosys/udm_data_toolkit";
import { IFundOrShareClass } from "../models";
import { isNullOrUndefined, isNullOrEmpty, processValueCollection, safe } from "../utils";
let properties = require("../../artifacts/config/core_data/statistics_properties");
let mapping = require("../../artifacts/config/mapping/statistics");
export async function processStatistics(funds: IFundOrShareClass[], manifest: {}): Promise<dataLoadingArray> {
	let response = new dataLoadingArray();
	if (!response.statistics) {
		response.statistics = [];
	}

	// Add processing logic here
	// Prepare dataToProcess for statistics here
	let dataToProcess = safe(() => manifest['statistics'].orchestratedData, []);
	
	// Add processing logic here
	if (!isNullOrEmpty(dataToProcess)) {		
		response.statistics = processValueCollection(dataToProcess, properties, mapping);		
	}

	return response;
}   