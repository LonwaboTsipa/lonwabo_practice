import { dataLoadingArray } from "@kurtosys/udm_data_toolkit";
import { IFundOrShareClass } from "../models";
import { isNullOrUndefined, processValueCollection } from "../utils";
let properties = require("../../artifacts/config/core_data/allocation_properties");
let mapping = require("../../artifacts/config/mapping/allocation");
export async function processAllocations(funds: IFundOrShareClass[], dataToProcess: {}[]) : Promise<dataLoadingArray> {
	let response = new dataLoadingArray();	
	if (!response.allocations) {
		response.allocations = [];
	}
	
	// Add processing logic here
	if (!isNullOrUndefined(dataToProcess)) {		
		response.allocations = processValueCollection(dataToProcess, properties, mapping);		
	}
	
	return response;
}   

