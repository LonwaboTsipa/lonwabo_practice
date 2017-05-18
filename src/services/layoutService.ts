import * as fetch from "isomorphic-fetch";
import { LOADER_CONFIG } from "@kurtosys/udm_data_toolkit";
export async function fetchAllLayoutConfigurations(token, layoutConfigurationType: string) {
    let response = await fetch((LOADER_CONFIG["originalConfig"] as any).endPoints.retrieveLayoutConfiguration, {
        method: "POST",
        headers: Object.assign({}, {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "X-KSYS-TOKEN": token
        }),
        body: JSON.stringify({
            "layoutConfigurationType": layoutConfigurationType
        })
    });
    if (response.status >= 200 && response.status < 400) {
        let body = (await response.json());
        if (body && body.valid && body.layoutConfigurations) {
            return body.layoutConfigurations;
        }
        return [];
    }
    return null;
}