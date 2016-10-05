import { login, dataLoadingArray, getClient, IManifest } from "@kurtosys/udm_data_toolkit";
import {processAllocations, processFunds, processShareClasses, processTimeseries} from "../processors";
import {fetchFunds, fetchShareClasses} from "../services";
import { IOrchestratedManifest } from "../models";
import {orchestrateManifest, callApi} from "../utils";
let translations =  require("./translations.json");
export async function ingestAll(rawManifest: IManifest[]): Promise<IOrchestratedManifest> {
	// Orchestrate the manifest to be able to create an object out of the manifest items
	// This requires the manifest elements to have a "key" attribute
	// The data needs to be loaded in first before we orchestrate the manifest as it does not mutate the original
	let manifest = orchestrateManifest(rawManifest);

	// Any additional ingestion can be done here for API calls or orchestrating
	// data that wil be needed at the processor level
	manifest['translations'].orchestratedData = translations;

	return manifest;
}