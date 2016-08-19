import { dataLoadingArray } from "@kurtosys/udm_data_toolkit";
import { IFundOrShareClass } from "../models";
import { processCommentaryCollection, safe, isNullOrEmpty } from "../utils";
let properties = require("../../artifacts/config/core_data/commentary_types");
let mappings = require("../../artifacts/config/mapping/commentaries");
export async function processCommentaries(funds: IFundOrShareClass[], manifest: {}) : Promise<dataLoadingArray> {
	let response = new dataLoadingArray();	
	if (!response.commentary) {
		response.commentary = [];
	}
	
	// Prepare dataToProcess for Allocations here
	let dataToProcess = safe(() => manifest['commentaries'].orchestratedData, []);
	
	// Add processing logic here
	if (!isNullOrEmpty(dataToProcess)) {		
		response.commentary = processCommentaryCollection('commentary_1', dataToProcess, properties, mappings);		
	}
	
	return response;
}   