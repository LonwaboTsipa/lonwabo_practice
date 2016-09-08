import {firstOrDefault} from "../utils";
import {IPropertyDescriptor, dataLoadingArray, insertWebSocket, createData, createDocuments, TargetObject, EntityType, PropertyType, IDocument } from "@kurtosys/udm_data_toolkit";
export function getProperty(item: { [keys: string]: any; }, property: string): any {
    return item && item[property] ? item[property] : "";
}
export function getClientCode(item: {}) {
    return getProperty(item, 'clientCode');
}
export function getTimeseriesKey(item: {}) {
    let keys = ['clientCode', 'code', 'ccy', 'classification', 'periodicity'];
    return keys.map(k => item[k]).join('|');
}
export function getStatisticsKey(item: {}) {
    let keys = ['clientCode', 'code', 'ccy'];
    return keys.map(k => item[k]).join('|');
}
export function getAllocationsKey(item: {}) {
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

export function concatDataToLoad(global: dataLoadingArray, ...params: dataLoadingArray[]): dataLoadingArray {
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
export async function insertDataToLoad(dataToLoad: dataLoadingArray, excludeFundsAndClasses: Boolean = false) {
    let mappings = [
        { key: 'funds', targetType: 'fund', isCreateDataElement: false, disabled: excludeFundsAndClasses, ignoreEntityType: false, batchSize: 50 },
        { key: 'classes', targetType: 'fund', isCreateDataElement: false, disabled: excludeFundsAndClasses, ignoreEntityType: false, batchSize: 50 },
        { key: 'timeseries', targetType: 'timeseries', isCreateDataElement: false, disabled: false, ignoreEntityType: false, batchSize: 50 },
        { key: 'statistics', targetType: 'statistics', isCreateDataElement: false, disabled: false, ignoreEntityType: false, batchSize: 50 },
        { key: 'allocations', targetType: 'allocations', isCreateDataElement: false, disabled: false, ignoreEntityType: false, batchSize: 50 },
        { key: 'documents', targetType: 'documents', isCreateDataElement: false, disabled: false, ignoreEntityType: true, batchSize: 50 },
        { key: 'commentary', targetType: 'commentary', isCreateDataElement: false, disabled: false, ignoreEntityType: true, batchSize: 50 },
        { key: 'disclaimers', targetType: 'disclaimer', isCreateDataElement: false, disabled: false, ignoreEntityType: true, batchSize: 50 },
        { key: 'translations', targetType: 'translation', isCreateDataElement: true, disabled: false, ignoreEntityType: true, batchSize: 50 },
        { key: 'fundLists', targetType: 'fundList', isCreateDataElement: true, disabled: false, ignoreEntityType: true, batchSize: 50 }
    ];
    
    for (let mapping of mappings) {
        let records = [];
        if (!mapping.ignoreEntityType) {
            let entityTypes = ["FUND", "CLSS"];
            if (dataToLoad && dataToLoad[mapping.key]) {
                for (let entityType of entityTypes) {
                    records = dataToLoad[mapping.key].filter(element => {
                        if (element.entityType) {
                            return element.entityType === entityType;
                        } else if (element.type) {
                            return element.type === entityType;
                        } else {
                            return element;
                        }
                    });
                    await sendDataToAPI(mapping, records, entityType);
                }
            }
        }
        else {
            records = dataToLoad[mapping.key];
            await sendDataToAPI(mapping, records);
        }
    }
}

export async function sendDataToAPI(mapping, records: {}[], entityType: string = "") {
    if (!mapping.disabled && records && records.length > 0) {
        let maxBatchSize = mapping.batchSize;        
        while (records.length > 0) {            
            let batchSize = records.length;
            let batchRecords = records.splice(0, batchSize);
            if (mapping.key === 'documents') {
                await createDocuments(batchRecords as any);
            }
            else if (mapping.isCreateDataElement) {
                await createData(batchRecords as IPropertyDescriptor[], mapping.targetType as PropertyType);
            }
            else {
                await insertWebSocket(batchRecords, mapping.targetType as TargetObject, entityType as EntityType);
            }
        }

    }
}