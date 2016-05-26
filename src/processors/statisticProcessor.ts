import { dataLoadingArray } from "@kurtosys/udm_data_toolkit";
import { IFundOrShareClass } from "../models";
//let properties = require("../../allocation_properties");
export async function processStatistics(funds: IFundOrShareClass[], dataToProcess: {}[]) : Promise<dataLoadingArray> {
	let response = new dataLoadingArray();	
	if (!response.statistics) {
		response.statistics = [];
	}
	
	// Add processing logic here

	
	return response;
}   