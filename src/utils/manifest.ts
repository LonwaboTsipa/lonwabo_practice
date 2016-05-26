import { IManifest } from "@kurtosys/udm_data_toolkit";

export function orchestrateManifest(rawManifest : IManifest[]) {
    let manifest = {};    
    for (let rawItem of rawManifest) {
        manifest[rawItem["key"]] = rawItem;
    }
    return manifest;        
}

