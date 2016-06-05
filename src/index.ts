require('isomorphic-fetch');
import { login, dataLoadingArray, LOADER_CONFIG, getClient, initDataToolkitConfig, registerLoaderStart, loadFilesFromFolder, IManifest,
        insertWebSocket, createData, IPropertyDescriptor, registerLoaderEnd, syncFTPFolder, finalizeFTP, TargetObject, EntityType } from "@kurtosys/udm_data_toolkit";
import * as path from "path";
import * as fs from "fs";
import {orchestrateManifest, toCode, isNullOrEmpty, concatDataToLoad} from "./utils";
import {processAllocations, processFunds, processShareClasses} from "./processors";
import {fetchFunds, fetchShares} from "./services";
// Get the manifest with data source mappings
const rawManifest = <IManifest[]>require("../artifacts/config/manifest");
// Orchestrate the manifest to be able to create an object out of the manifest items
// This requires the manifest elements to have a "key" attribute
const manifest = orchestrateManifest(rawManifest);

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
            // PROCESSING LOGIC GOES HERE
            
            if (manifest["funds"] && !isNullOrEmpty(manifest['funds'].data)) {
                let result = await processFunds(manifest['funds'].data as {}[]);
                dataToLoad = concatDataToLoad(dataToLoad, result);
            }
            
            if (manifest['shareClasses'] && !isNullOrEmpty(manifest['shareClasses'].data)) {
                let result = await processShareClasses(manifest['shareClasses'].data as {}[]);
                dataToLoad = concatDataToLoad(dataToLoad, result);
            }
            
            // Fetch any additional funds or share classes that were previously loaded 
            // this is done in case we are running delta files
            let fundsAndShares = await fetchFunds(token);
            fundsAndShares = fundsAndShares.concat(await fetchShares(token));
            fundsAndShares = fundsAndShares.concat(dataToLoad.funds || []);
            fundsAndShares = fundsAndShares.concat(dataToLoad.classes || []);
            
            if (manifest['allocations'] && !isNullOrEmpty(manifest['allocations'].data)) {
                let result = await processAllocations(fundsAndShares, manifest['allocations'].data as {}[]);
                dataToLoad = concatDataToLoad(dataToLoad, result);
            }
            
            //insertDataToLoad(dataToLoad);            
            
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

async function insertDataToLoad(dataToLoad: dataLoadingArray) {
    let mappings = [
        { key: 'funds', entityType: 'fund', targetObject: 'FUND' },
        { key: 'classes', entityType: 'fund', targetObject: 'CLSS' }
    ];
    for (let mapping of mappings) {
        if (!isNullOrEmpty(dataToLoad[mapping.key])) {
            insertWebSocket(dataToLoad[mapping.key], mapping.entityType as TargetObject, mapping.targetObject as EntityType)        
        }
    }    
}

initDataToolkitConfig(rootDir, loadDataAsync);