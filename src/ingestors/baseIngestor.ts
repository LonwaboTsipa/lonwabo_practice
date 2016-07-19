import { login, dataLoadingArray, getClient, IManifest } from "@kurtosys/udm_data_toolkit";
import {processAllocations, processFunds, processShareClasses, processTimeseries} from "../processors";
import {fetchFunds, fetchShareClasses} from "../services";
import { IOrchestratedManifest } from "../models";
import {orchestrateManifest, callApi} from "../utils";

export async function ingestAll(rawManifest: IManifest[]): Promise<IOrchestratedManifest> {
	// Orchestrate the manifest to be able to create an object out of the manifest items
	// This requires the manifest elements to have a "key" attribute
	// The data needs to be loaded in first before we orchestrate the manifest as it does not mutate the original
	let manifest = orchestrateManifest(rawManifest);

	let searchApiManifestItem = manifest["searchApi"];

	// let response = await callApi(searchApiManifestItem);
	// console.log('response 1', response);

	// let userListManifestItem = manifest["userList"];

	// response = await callApi(userListManifestItem, { clientId: 2 });
	// console.log('response 2', response);

	// let mi = manifest["monringstarDetails"];

	// response = await callApi(mi, {}, { mstarInternalId: "FHUSA04DC2" });
	// console.log('response 3', response);

	let oneviewMI = manifest["oneview"];

	let response = await callApi(oneviewMI);
	console.log('response 4', JSON.stringify(response, null, 4));


	return manifest;
}