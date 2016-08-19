import { dataLoadingArray } from "@kurtosys/udm_data_toolkit";
import { IFundOrShareClass } from "../models";
import { processDisclaimerCollection, safe, isNullOrEmpty } from "../utils";
let properties = require("../../artifacts/config/core_data/disclaimer_types");
let mappings = require("../../artifacts/config/mapping/disclaimers");
export async function processDisclaimers(funds: IFundOrShareClass[], manifest: {}) : Promise<dataLoadingArray> {
	let response = new dataLoadingArray();	
	if (!response.disclaimers) {
		response.disclaimers = [];
	}
	
	// Prepare dataToProcess for Allocations here
	let dataToProcess = safe(() => manifest['disclaimers'].orchestratedData, []);
	
	// Add processing logic here
	if (!isNullOrEmpty(dataToProcess)) {		
		response.disclaimers = processDisclaimerCollection('disclaimer_1', dataToProcess, properties, mappings);		
	}
	
	return response;
}   