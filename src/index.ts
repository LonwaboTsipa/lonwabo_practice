
import { login, dataLoadingArray,    LOADER_CONFIG,
    getClient,
    initDataToolkitConfig,
    registerLoaderStart,
    loadFilesFromFolder,
    IManifest,
    insertWebSocket,
    createData,
    IPropertyDescriptor,
    registerLoaderEnd,
    syncFTPFolder,
    finalizeFTP
} from "@kurtosys/udm_data_toolkit";
import * as path from "path";
import * as fs from "fs";
import {orchestrateManifest, toCode} from "./utils";

// Get the manifest with data source mappings
const rawManifest = <IManifest[]>require("../artifacts/config/manifest");
// Orchestrate the manifest to be able to create an object out of the manifest items
const manifest = orchestrateManifest(rawManifest);

const rootDir = path.resolve(process.cwd(), "artifacts");
const pendingDir = path.resolve(rootDir, "pending");

async function loadDataAsync() {
// Data in
// Massage the data
// send data to api

}

initDataToolkitConfig(rootDir, loadDataAsync);