import { dataLoadingArray, IManifest, XlsxData, IFund, IPropertyDescriptor, DataType, IPropertyPub } from "@kurtosys/udm_data_toolkit";
import {isNullOrEmpty, isNullOrUndefined, processFundOrShareClass, safe } from "../utils";
let properties = <IPropertyDescriptor[]>require("../../artifacts/config/core_data/properties");
let fundProperties = properties.filter(property => property.entityType === 'FUND');
//let properties = require("../../properties");
export async function processFunds(manifest: {}): Promise<dataLoadingArray> {
	let response = new dataLoadingArray();
	if (!response.funds) {
		response.funds = [];
	}

	// Prepare dataToProcess for Funds here
	let dataToProcess = safe(() => manifest["funds"].orchestratedData, []);

	// Add processing logic here
	if (!isNullOrEmpty(dataToProcess)) {
		for (let row of dataToProcess) {
			response.funds.push(processFundOrShareClass("FUND", row, fundProperties));
		}
	}


	return response;
}




