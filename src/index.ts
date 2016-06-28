require('isomorphic-fetch');
import { login, dataLoadingArray, LOADER_CONFIG, getClient, initDataToolkitConfig, registerLoaderStart, loadFilesFromFolder, IManifest,
       IPropertyDescriptor, registerLoaderEnd, syncFTPFolder, finalizeFTP
       } from "@kurtosys/udm_data_toolkit";
import * as path from "path";
import * as fs from "fs";
import {orchestrateManifest, toCode, isNullOrEmpty, concatDataToLoad, insertDataToLoad, orchestrateManifestData, isNullOrUndefined} from "./utils";
import {processAllocations, processFunds, processShareClasses, processTimeseries} from "./processors";
import {fetchFunds, fetchShareClasses} from "./services";
// Get the manifest with data source mappings
const rawManifest = <IManifest[]>require("../artifacts/config/manifest");

const rootDir = path.resolve(process.cwd(), "artifacts");
const pendingDir = path.resolve(rootDir, "pending");
const useFTP = false;
export async function loadDataAsync() {
    let registerEndRan = false;
    try {
        let token = await login();
        let client = await getClient();
        let loaderStart = await registerLoaderStart();
        let dataToLoad = new dataLoadingArray();
        let ftpSourceRelativePath = 'pending';
        let ftpArchiveRelativePath = 'archive';
        if (useFTP) {
            let syncResult = await syncFTPFolder(ftpSourceRelativePath);    
        }
        
        let hasFilesToLoad = await loadFilesFromFolder(pendingDir, rawManifest.filter(m => m.isFileForLoad));

        if (hasFilesToLoad) {
            // Orchestrate the manifest to be able to create an object out of the manifest items
            // This requires the manifest elements to have a "key" attribute
            // The data needs to be loaded in first before we orchestrate the manifest as it does not mutate the original
            const manifest = orchestrateManifest(rawManifest);

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
            
            // Insert Allocation, Timeseries, etc
            await insertDataToLoad(dataToLoad, true);            
            
            if (useFTP) {
                await finalizeFTP(ftpSourceRelativePath, ftpArchiveRelativePath);
            }
        }
        else {
            console.log(`No files to load from folder`);
        }
        registerEndRan = true;
        let endResponse = await registerLoaderEnd(0, null as any, rawManifest, dataToLoad);
    }
    catch (e) {
        console.error(`Loader experienced an error: ${JSON.stringify(e.message)}`);
        if (!registerEndRan) {
            registerLoaderEnd(e.exitcode, e);
        }
        throw e;
    }
}

initDataToolkitConfig(rootDir, loadDataAsync);