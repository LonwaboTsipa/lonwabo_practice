import {firstOrDefault} from "../utils";
import {dataLoadingArray, insertWebSocket, createData, createDocuments, TargetObject, EntityType, PropertyType } from "@kurtosys/udm_data_toolkit";
export function getProperty(item : { [keys: string]: any; }, property: string): any {
    return item && item[property] ? item[property] : "";
}
export function getClientCode(item : {}) {
    return getProperty(item, 'clientCode');
}
export function getTimeseriesKey(item : {}) {
    let keys = ['clientCode', 'code', 'ccy', 'classification', 'periodicity'];
    return keys.map(k => item[k]).join('|');
}
export function getStatisticsKey(item : {}) {
    let keys = ['clientCode', 'code', 'ccy'];
    return keys.map(k => item[k]).join('|');
}
export function getAllocationsKey(item : {}) {
    let keys = ['clientCode', 'code', 'ccy'];
    return keys.map(k => item[k]).join('|');
}

let mappings = {
    'funds': { key: 'funds', uniqueIdentifierFn: getClientCode },
    'classes': { key: 'classes', uniqueIdentifierFn: getClientCode },
    'timeseries': { key: 'timeseries', uniqueIdentifierFn: getTimeseriesKey },
    'statistics': { key: 'statistics', uniqueIdentifierFn: getStatisticsKey },
    'allocations': { key: 'allocations', uniqueIdentifierFn: getAllocationsKey },
    'documents': { key: 'documents', uniqueIdentifierFn: getClientCode }
};

export function concatDataToLoad(global : dataLoadingArray, ...params : dataLoadingArray[]) : dataLoadingArray {
    let response = Object.assign({}, global);
    for (let current of params) {
        Object.keys(current).map(key => {
            if (current[key] && current[key].length > 0) {
                if (!response[key]) {
                    response[key] = [];
                }
                let hashCheck = {};
                let contents = [].concat(response[key]).concat(current[key]);
                if (mappings[key]) {
                    let {uniqueIdentifierFn} = mappings[key];
                    contents.map(content => {
                        if (content) {
                            hashCheck[uniqueIdentifierFn(content)] = content;
                        }
                    });
                    contents = Object.keys(hashCheck).map(uid => hashCheck[uid]);
                }
                response[key] = contents;

            }
        });
    }
    return response;
}
// TODO: Add testing
export async function insertDataToLoad(dataToLoad: dataLoadingArray, excludeFundsAndClasses : Boolean = false) {
    let mappings = [
        { key: 'funds', targetType: 'fund', entityType: 'FUND', isCreateDataElement: false, disabled: excludeFundsAndClasses },
        { key: 'classes', targetType: 'fund', entityType: 'CLSS', isCreateDataElement: false, disabled: excludeFundsAndClasses },
        { key: 'timeseries', targetType: 'timeseries', entityType: 'CLSS', isCreateDataElement: false, disabled: false },
        { key: 'statistics', targetType: 'statistics', entityType: 'CLSS', isCreateDataElement: false, disabled: false },
        { key: 'allocations', targetType: 'allocations', entityType: 'CLSS', isCreateDataElement: false, disabled: false },
        { key: 'documents', targetType: 'documents', entityType: 'CLSS', isCreateDataElement: false, disabled: false }
    ];

    for (let mapping of mappings) {                   
        if (!mapping.disabled && dataToLoad[mapping.key] && dataToLoad[mapping.key].length > 0) {
            if (mapping.key === 'documents') {
                await createDocuments(dataToLoad[mapping.key]);
            }
            else if (mapping.isCreateDataElement) {
                await createData(dataToLoad[mapping.key], mapping.targetType as PropertyType);
            }
            else {
                await insertWebSocket(dataToLoad[mapping.key], mapping.targetType as TargetObject, mapping.entityType as EntityType)
            }
        }
    }  
}