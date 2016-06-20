import { dataLoadingArray, IManifest, XlsxData, IFund, IPropertyDescriptor, DataType, IPropertyPub } from "@kurtosys/udm_data_toolkit";
import {isNullOrUndefined, processFundOrShareClass } from "../utils";
let properties = <IPropertyDescriptor[]>require("../../artifacts/config/core_data/properties");
let fundProperties = properties.filter(property => property.entityType === 'FUND');
//let properties = require("../../properties");
export async function processFunds(dataToProcess: {}[]): Promise<dataLoadingArray> {
	let response = new dataLoadingArray();
	if (!response.funds) {
		response.funds = [];
	}	

	// Add processing logic here
	if (!isNullOrUndefined(dataToProcess)) {
		for (let row of dataToProcess) {
			response.funds.push(processFundOrShareClass("FUND", row, fundProperties));
		}
	}
	
	return response;
}




