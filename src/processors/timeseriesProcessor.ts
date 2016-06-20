import { dataLoadingArray } from "@kurtosys/udm_data_toolkit";
import { IFundOrShareClass } from "../models";
import { isNullOrUndefined, processValueCollection } from "../utils";
let properties = require("../../artifacts/config/core_data/timeseries_properties");
let mapping = require("../../artifacts/config/mapping/timeseries");
export async function processTimeseries(funds: IFundOrShareClass[], dataToProcess: {}[]) : Promise<dataLoadingArray> {
	let response = new dataLoadingArray();	
	if (!response.timeseries) {
		response.timeseries = [];
	}
	// Add processing logic here
	if (!isNullOrUndefined(dataToProcess)) {		
		response.timeseries = processValueCollection(dataToProcess, properties, mapping, false);		
	}
	
	return response;
}   