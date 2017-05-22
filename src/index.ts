import { login, dataLoadingArray, LOADER_CONFIG, getClient, initDataToolkitConfig, registerLoaderStart, loadFilesFromFolder, IManifest,
    IPropertyDescriptor, registerLoaderEnd, syncFTPFolder, finalizeFTP
} from "@kurtosys/udm_data_toolkit";
import * as path from "path";
import * as fs from "fs";
import {orchestrateManifest, toCode, isNullOrEmpty, concatDataToLoad, insertDataToLoad, orchestrateManifestData, isNullOrUndefined, addException, clearExceptions} from "./utils";
import {ingestAll} from "./ingestors";
import {processAll} from "./processors";
import {rootDir, pendingDir} from "./constants";

import {fetchFunds, fetchShareClasses} from "./services";
// Get the manifest with data source mappings
const rawManifest = <IManifest[]>JSON.parse(JSON.stringify(require("../artifacts/config/manifest")));
const useFTP = false;
export async function loadDataAsync() {
    clearExceptions();
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

        // Ingest external data
        const manifest = await ingestAll(rawManifest);

        // Process the data here
        dataToLoad = concatDataToLoad(dataToLoad, await processAll(manifest));
        // Insert Allocation, Timeseries, etc
        await insertDataToLoad(dataToLoad, true);

        if (useFTP) {
            await finalizeFTP(ftpSourceRelativePath, ftpArchiveRelativePath);
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