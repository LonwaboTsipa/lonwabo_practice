import { dataLoadingArray, IPropertyDescriptor } from "@kurtosys/udm_data_toolkit";
import {isNullOrUndefined, isNullOrEmpty, processFundOrShareClass, safe } from "../utils";
let properties = <IPropertyDescriptor[]>require("../../artifacts/config/core_data/properties");
let shareClassProperties = properties.filter(property => property.entityType === 'CLSS');
//let properties = require("../../properties");
export async function processShareClasses(manifest: {}) : Promise<dataLoadingArray> {
	let response = new dataLoadingArray();	
	if (!response.classes) {
		response.classes = [];
	}

	// Prepare dataToProcess for ShareClasses here
	let dataToProcess = safe(() => manifest["shareClasses"].orchestratedData, []);

	// Add processing logic here
	if (!isNullOrEmpty(dataToProcess)) {
		for (let row of dataToProcess) {
			response.classes.push(processFundOrShareClass("CLSS", row, shareClassProperties));
		}
	}
	
	return response;
}   