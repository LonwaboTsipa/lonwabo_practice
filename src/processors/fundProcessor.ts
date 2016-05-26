import { dataLoadingArray } from "@kurtosys/udm_data_toolkit";
//let properties = require("../../properties");
export async function processFunds(dataToProcess: {}[]) : Promise<dataLoadingArray> {
	let response = new dataLoadingArray();	
	if (!response.funds) {
		response.funds = [];
	}
	
	// Add processing logic here

	
	return response;
}   