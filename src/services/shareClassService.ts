import { LOADER_CONFIG } from "@kurtosys/udm_data_toolkit";

export async function fetchShareClasses(token) {
    let response = await fetch(LOADER_CONFIG["originalConfig"].endPoints.search, {
        method: "POST",
        headers: Object.assign({}, {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "X-KSYS-TOKEN": token
        }),
        body: JSON.stringify({
            type: "CLSS",
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
            return body.values.map(shareClass => {
                shareClass.propertiesPub = shareClass.properties_pub;
                delete shareClass.properties_pub;  
                return shareClass;
            });
        }        
        return [];
    }
    return null;
}
