import { dataLoadingArray } from "@kurtosys/udm_data_toolkit";
//let properties = require("../../properties");
export async function processShareClasses(dataToProcess: {}[]) : Promise<dataLoadingArray> {
	let response = new dataLoadingArray();	
	if (!response.classes) {
		response.classes = [];
	}
	
	// Add processing logic here

	
	return response;
}   