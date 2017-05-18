import * as fetch from "isomorphic-fetch";
import { LOADER_CONFIG } from "@kurtosys/udm_data_toolkit";
import { IOriginalLoaderConfig } from "../models";
export async function fetchFunds(token) {
    let response = await fetch((LOADER_CONFIG["originalConfig"] as IOriginalLoaderConfig).endPoints.search, {
        method: "POST",
        headers: Object.assign({}, {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "X-KSYS-TOKEN": token
        }),
        body: JSON.stringify({
            type: "FUND",
            search: [],
            include: {
                timeseries: {},
                allocations: {},
                statistics: {},
                commentaries: {}
            },
            culture: "en-GB",
            applyFormats: false,
            disclaimers: false,
            start: 0,
            limit: 10000
        })
    });

    if (response.status >= 200 && response.status < 400) {
        let body = (await response.json());
        if (body && body.values) {
            return body.values.map(fund => {
                fund.propertiesPub = fund.properties_pub;
                delete fund.properties_pub;
                return fund;
            });
        }
        return [];
    }
    return null;
}