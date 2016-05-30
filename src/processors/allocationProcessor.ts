import { dataLoadingArray } from "@kurtosys/udm_data_toolkit";
import { IFundOrShareClass } from "../models";
let properties = require("../../artifacts/config/core_data/allocation_properties");
export async function processAllocations(funds: IFundOrShareClass[], dataToProcess: {}[]) : Promise<dataLoadingArray> {
	let response = new dataLoadingArray();	
	if (!response.allocations) {
		response.allocations = [];
	}
	
	// Add processing logic here

	
	return response;
}   