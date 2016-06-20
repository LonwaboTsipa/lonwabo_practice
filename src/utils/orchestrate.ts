import { IManifest, XlsxData } from "@kurtosys/udm_data_toolkit";
import { isNullOrEmpty } from "../utils";

export function orchestrateManifestData(manifestItem: IManifest) : {}[] | undefined {
	let orchestratedData: ({}[] | undefined);
	switch (manifestItem.type) {
		case "xlsx":
			orchestratedData = orchestrateXlsxData(manifestItem.data as XlsxData);
			break;
		case "csv":
			orchestratedData = orchestrateCsvData(manifestItem.data as {}[]);
			break;
	}
	return orchestratedData;	
}

export function orchestrateCsvData(rawDataToProcess) : {}[] {	
	return orchestrateArrayOfArrays(rawDataToProcess);
}

export function orchestrateXlsxData(rawDataToProcess: XlsxData): {}[] {
	return orchestrateArrayOfArrays(rawDataToProcess);
} 

export function orchestrateArrayOfArrays(rawDataToProcess: (string | number)[][]): {}[] {
	let response = [];
	if (!isNullOrEmpty(rawDataToProcess)) {
		let data = [].concat(rawDataToProcess);
		let header = data.shift();
		response = data.map((row) => {
			let headerIndex = 0;
			return header.reduce((existing, current) => {
				existing[current] = row.length > headerIndex ? row[headerIndex] : null;
				headerIndex++;
				return existing;
			}, {});
		})
	}
	return response;
}