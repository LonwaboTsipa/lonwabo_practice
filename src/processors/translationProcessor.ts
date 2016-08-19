import { dataLoadingArray } from "@kurtosys/udm_data_toolkit";
import { processTranslationCollection, safe, isNullOrEmpty } from "../utils";
let mappings = require("../../artifacts/config/mapping/translations");
export async function processTranslations(manifest: {}[]) : Promise<dataLoadingArray> {
	let response = new dataLoadingArray();	
	if (!response.translations) {
		response.translations = [];
	}
	
	// Prepare dataToProcess for Allocations here
	let dataToProcess = safe(() => manifest['translations'].orchestratedData, []);
	console.log('translations dataToProcess: ', dataToProcess);
	// Add processing logic here
	if (!isNullOrEmpty(dataToProcess)) {		
		response.translations = processTranslationCollection('translation_1', dataToProcess, mappings);		
	}
	
	return response;
}   