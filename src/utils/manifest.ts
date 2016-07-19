import { IManifest } from "@kurtosys/udm_data_toolkit";
import { orchestrateManifestData } from "./orchestrate";
import { IOrchestratedManifest } from "../models";
export function orchestrateManifest(rawManifest : IManifest[]) : IOrchestratedManifest {
    let manifest : {[key : string] : IManifest} = {};    
    for (let rawItem of rawManifest) {
        manifest[rawItem.key] = Object.assign({}, rawItem, {
            orchestratedData: orchestrateManifestData(rawItem)    
        });
    }
    return manifest;        
}

