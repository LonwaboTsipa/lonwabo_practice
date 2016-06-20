import { dataLoadingArray, IPropertyDescriptor } from "@kurtosys/udm_data_toolkit";
import {isNullOrUndefined, processFundOrShareClass } from "../utils";
let properties = <IPropertyDescriptor[]>require("../../artifacts/config/core_data/properties");
let shareClassProperties = properties.filter(property => property.entityType === 'CLSS');
//let properties = require("../../properties");
export async function processShareClasses(dataToProcess: {}[]) : Promise<dataLoadingArray> {
	let response = new dataLoadingArray();	
	if (!response.classes) {
		response.classes = [];
	}	
	// Add processing logic here
	if (!isNullOrUndefined(dataToProcess)) {
		for (let row of dataToProcess) {
			response.classes.push(processFundOrShareClass("CLSS", row, shareClassProperties));
		}
	}
	
	return response;
}   