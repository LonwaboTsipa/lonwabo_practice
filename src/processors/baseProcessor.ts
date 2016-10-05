import { login, dataLoadingArray, getClient, IManifest, LOADER_CONFIG } from "@kurtosys/udm_data_toolkit";
import {concatDataToLoad, insertDataToLoad} from "../utils";
import {processAllocations, processFunds, processShareClasses, processTimeseries,
	processStatistics, processDocuments, processTranslations, processCommentaries,
	processDisclaimers, processMorningStar } from "../processors";
import {fetchFunds, fetchShareClasses} from "../services";
import { IOrchestratedManifest, IMorningStarIngestionIndication } from "../models";



export async function processAll(manifest: IOrchestratedManifest): Promise<dataLoadingArray> {
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

	// Proccess Documents
	dataToLoad = concatDataToLoad(dataToLoad, await processDocuments(fundsAndShares, manifest));

	// Proccess Translations
	dataToLoad = concatDataToLoad(dataToLoad, await processTranslations(manifest));

	// Proccess Commentaries
	dataToLoad = concatDataToLoad(dataToLoad, await processCommentaries(fundsAndShares, manifest));

	// Proccess Disclaimers
	dataToLoad = concatDataToLoad(dataToLoad, await processDisclaimers(fundsAndShares, manifest));

	// Process MorningStar data
	let morningStarIngestion = (LOADER_CONFIG["originalConfig"]["morningStarIngestion"] || {}) as IMorningStarIngestionIndication;
	let anyMorningStarIngestion = Object.keys(morningStarIngestion).reduce((existing, key) => {
		return existing || morningStarIngestion[key];
	}, false);
	if (anyMorningStarIngestion) {
		dataToLoad = concatDataToLoad(dataToLoad, await processMorningStar(fundsAndShares, manifest));
	}
	

	return dataToLoad;
}

