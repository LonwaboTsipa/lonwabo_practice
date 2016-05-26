import { dataLoadingArray } from "@kurtosys/udm_data_toolkit";
import { IFundOrShareClass } from "../models";
//let properties = require("../../allocation_properties");
export async function processDocuments(funds: IFundOrShareClass[], dataToProcess: {}[]) : Promise<dataLoadingArray> {
	let response = new dataLoadingArray();	
	if (!response.documents) {
		response.documents = [];
	}
	
	// Add processing logic here

	
	return response;
}   