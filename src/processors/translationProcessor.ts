import { dataLoadingArray } from "@kurtosys/udm_data_toolkit";
//let properties = require("../../properties");
export async function processTranslations(dataToProcess: {}[]) : Promise<dataLoadingArray> {
	let response = new dataLoadingArray();	
	if (!response.translations) {
		response.translations = [];
	}
	
	// Add processing logic here

	
	return response;
}   