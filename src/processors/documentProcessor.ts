import { dataLoadingArray } from "@kurtosys/udm_data_toolkit";
import { IFundOrShareClass } from "../models";
import { processLinkedDocumentCollection, safe, isNullOrEmpty } from "../utils";
let properties = require("../../artifacts/config/core_data/document_metadata");
let mappings = require("../../artifacts/config/mapping/documents");

export async function processDocuments(funds: IFundOrShareClass[], manifest: {}) : Promise<dataLoadingArray> {
	let response = new dataLoadingArray();	
	if (!response.documents) {
		response.documents = [];
	}

	// Prepare dataToProcess for Allocations here
	let dataToProcess = safe(() => manifest['documents'].orchestratedData, []);
	
	// Add processing logic here
	if (!isNullOrEmpty(dataToProcess)) {		
		response.documents = processLinkedDocumentCollection('document_1', dataToProcess, properties, mappings);		
	}
	

	return response;
}   