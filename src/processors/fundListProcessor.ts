import { dataLoadingArray } from "@kurtosys/udm_data_toolkit";
import { IFundOrShareClass } from "../models";
import { processFundListCollection, safe, isNullOrEmpty } from "../utils";
let mappings = require("../../artifacts/config/mapping/fundLists");
export async function processFundLists(funds: IFundOrShareClass[], manifest: {}) : Promise<dataLoadingArray> {
	let response = new dataLoadingArray();	
	if (!response.fundLists) {
		response.fundLists = [];
	}	
	
	let dataToProcess = safe(() => manifest["fundlist"].orchestratedData, []);

	// Add processing logic here
	if (!isNullOrEmpty(dataToProcess)) {
		response.fundLists.push(processFundListCollection("fundlist_1", dataToProcess, mappings));
	}	
	
	return response;
}   