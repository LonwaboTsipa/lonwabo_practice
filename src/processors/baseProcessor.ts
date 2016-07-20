import { login, dataLoadingArray, getClient, IManifest } from "@kurtosys/udm_data_toolkit";
import {concatDataToLoad, insertDataToLoad} from "../utils";
import {processAllocations, processFunds, processShareClasses, processTimeseries, processStatistics} from "../processors";
import {fetchFunds, fetchShareClasses} from "../services";
import { IOrchestratedManifest } from "../models";

export async function processAll(manifest: IOrchestratedManifest) : Promise<dataLoadingArray> {
	let token = await login();
	let client = await getClient();
	let dataToLoad = new dataLoadingArray();
	// Process Funds            
	dataToLoad = concatDataToLoad(dataToLoad, await processFunds(manifest));

	// Process Share Classes
	dataToLoad = concatDataToLoad(dataToLoad, await processShareClasses(manifest));

	// Save Fund & ShareClass data to the database, incase we are processing delta files and we need the full fund & share class data for 
	// allocations, etc.
	await insertDataToLoad(dataToLoad);

	// Fetch any additional funds or share classes that were previously loaded 
	// this is done in case we are running delta files
	let existingFunds = await fetchFunds(token);
	let existingShareClasses = await fetchShareClasses(token);
	let fundsAndShares = [].concat(existingFunds).concat(existingShareClasses);

	// Process Allocations
	dataToLoad = concatDataToLoad(dataToLoad, await processAllocations(fundsAndShares, manifest));

	// Process Timeseries
	dataToLoad = concatDataToLoad(dataToLoad, await processTimeseries(fundsAndShares, manifest));

	// Process Statistics
	dataToLoad = concatDataToLoad(dataToLoad, await processStatistics(fundsAndShares, manifest));

	return dataToLoad;
}

