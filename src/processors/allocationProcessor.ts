import { dataLoadingArray } from "@kurtosys/udm_data_toolkit";
import { IFundOrShareClass } from "../models";
import { isNullOrUndefined, isNullOrEmpty, processValueCollection, safe } from "../utils";
let properties = require("../../artifacts/config/core_data/allocation_properties");
let mapping = require("../../artifacts/config/mapping/allocation");
export async function processAllocations(funds: IFundOrShareClass[], manifest: {}) : Promise<dataLoadingArray> {
	let response = new dataLoadingArray();	
	if (!response.allocations) {
		response.allocations = [];
	}

	// Prepare dataToProcess for Allocations here
	let dataToProcess = safe(() => manifest['allocations'].orchestratedData, []);
	
	// Add processing logic here
	if (!isNullOrEmpty(dataToProcess)) {		
		response.allocations = processValueCollection('allocation_1', dataToProcess, properties, mapping);		
	}
	
	return response;
}   

