#!/usr/bin/env node
import * as fs from "fs";
import * as path from "path";
import { EntityType, IPropertyDescriptor, DataType } from "@kurtosys/udm_data_toolkit";
declare type PropertyType = "entity" | "statistic" | "allocation" | "timeseries";
import { askQuestion, getCasesForComponentName, styleConsoleText, FONT_COLORS } from "../utils";
import * as changeCase from "change-case";
const readline = require("readline");

const rli = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

interface IMappingItem {
    code: string;
    dataType: DataType;
    sourceField: string;
}

interface IMapping {
    type: string;
    mappings: IMappingItem[];
}

interface IOptions {
    type: null | PropertyType;
    entityType: null | EntityType;
    typeName?: string;
    properties?: IPropertyDescriptor[];
    currentColumnName: string;
    rootProperty?: IPropertyDescriptor & { sourceField?: string; cardinality?: "1" | "N" };
    mapping?: IMapping
}

const PROPERTY_TYPES = ["entity", "statistic", "allocation", "timeseries"];
const ENTITY_TYPES = ["FUND", "CLSS", "BMRK", "FMGR"];

async function getOptions(): Promise<IOptions> {
    const options: IOptions = {
        type: null,
        entityType: null,
        properties: [],
        currentColumnName: null
    };

    while (PROPERTY_TYPES.indexOf(options.type) === -1) {
        options.type = await askQuestion(rli, `What type of properties do you want to create?`, "entity", PROPERTY_TYPES) as PropertyType;
    }

    while (ENTITY_TYPES.indexOf(options.entityType) === -1) {
        options.entityType = await askQuestion(rli, `What is the entity type?`, "CLSS", ENTITY_TYPES) as EntityType;
    }

    if (["statistic", "allocation", "timeseries"].indexOf(options.type) > -1) {
        options.typeName = await askQuestion(rli, `What is the type name which will be used in the mapping and code?`) as string;
        let typeNameCases = getCasesForComponentName(options.typeName);
        options.typeName = typeNameCases.snake;

        options.rootProperty = {
            code: "",
            entityType: "CLSS",
            cardinality: "1",
            group: "core"
        }
        options.rootProperty.entityType = options.entityType;
        options.rootProperty.code = options.typeName;
        options.rootProperty.label = await askQuestion(rli, `What is the label?`, typeNameCases.title) as string;
        options.rootProperty.description = await askQuestion(rli, `What is the description?`, typeNameCases.title) as string;
        options.rootProperty.extended = [];
        options.mapping = {
            type: options.typeName,
            mappings: []
        };
        let definedColumns: {
            code: string;
            dataType: DataType;
            defaultSourceField?: string;
            limitFn?: Function;
        }[] = [
                {
                    "code": "client_code",
                    "dataType": "STRG",
                },
                {
                    "code": "date",
                    "dataType": "DATE",
                    "defaultSourceField": "Date",
                    limitFn: (options: IOptions) => {
                        return options.type === 'timeseries';
                    }
                },
                {
                    "code": "type",
                    "dataType": "STRG",
                    "defaultSourceField": "Type"
                },
                {
                    "code": "label",
                    "dataType": "STRG",
                    "defaultSourceField": "Label",
                    limitFn: (options: IOptions) => {
                        return options.type !== 'timeseries';
                    }
                },
                {
                    "code": "value",
                    "dataType": "DCML",
                    "defaultSourceField": "Value"
                }
            ];
        for (let definedColumn of definedColumns) {
            let { code, dataType, defaultSourceField, limitFn } = definedColumn;
            if (!limitFn || limitFn(options)) {
                let sourceField = await askQuestion(rli, `What is the sourceField for ${code}?`, defaultSourceField) as string;
                options.mapping.mappings.push({
                    code,
                    dataType,
                    sourceField
                });
            }
        }
    }

    console.log('starting property entry');
    let continueEntry = 'y';
    let propertyCounter = 1;
    while (continueEntry.toLowerCase() === 'y') {
        let propertyPrefix = `Property #${propertyCounter}`;


        if (options.type === "entity") {
            let sourceField = await askQuestion(rli, `${propertyPrefix}: What is the sourceField? (Comma separate for multiple)`) as string;

            for (let currentSourceField of sourceField.split(',')) {
                let property: IPropertyDescriptor & { sourceField?: string; cardinality?: "1" | "N" } = {
                    code: "",
                    entityType: options.entityType,
                    validationRule: "NONE",
                    cardinality: "1",
                    group: "core"
                };
                currentSourceField = currentSourceField.trim();
                property.sourceField = currentSourceField;
                let cases = getCasesForComponentName(currentSourceField);
                property.code = await askQuestion(rli, `${currentSourceField}: What is the code?`, cases.snake) as string;
                property.dataType = await askQuestion(rli, `${currentSourceField}: What is the dataType?`, 'STRG') as DataType;
                property.label = await askQuestion(rli, `${currentSourceField}: What is the label?`, cases.title) as string;
                property.description = await askQuestion(rli, `${currentSourceField}: What is the description?`, cases.title) as string;
                options.properties.push(property);
            }
        }
        else {
            let sourceField = await askQuestion(rli, `${propertyPrefix}: What is the sourceField? (Comma separate for multiple)`) as string;
            for (let currentSourceField of sourceField.split(',')) {
                let mappingItem: IMappingItem = {
                    "code": "",
                    "dataType": "STRG",
                    "sourceField": ""
                };
                currentSourceField = currentSourceField.trim();
                mappingItem.sourceField = currentSourceField;
                let cases = getCasesForComponentName(currentSourceField);
                mappingItem.code = await askQuestion(rli, `${currentSourceField}: What is the code?`, cases.snake) as string;
                mappingItem.dataType = await askQuestion(rli, `${currentSourceField}: What is the dataType?`, 'STRG') as DataType;
                options.mapping.mappings.push(mappingItem);
                options.rootProperty.extended.push({
                    label: mappingItem.code,
                    dataType: mappingItem.dataType
                });
            }
        }



        continueEntry = await askQuestion(rli, `Do you want to continue adding properties?`, null, ["y", "N"]) as string;
        propertyCounter++;
    }


    return options;
}



interface IExistingDataElement {
    properties: IPropertyDescriptor[];
    propertiesFileName: string;
    mappings?: IMapping[];
    mappingsFileName?: string;
}

let existing: { [property: string]: IExistingDataElement } = {
    entity: {
        properties: require("../../artifacts/config/core_data/properties"),
        propertiesFileName: "properties"
    },
    statistic: {
        properties: require("../../artifacts/config/core_data/statistic_properties"),
        propertiesFileName: "statistic_properties",
        mappings: require("../../artifacts/config/mapping/statistics"),
        mappingsFileName: "statistics"
    },
    allocation: {
        properties: require("../../artifacts/config/core_data/allocation_properties"),
        propertiesFileName: "allocation_properties",
        mappings: require("../../artifacts/config/mapping/allocations"),
        mappingsFileName: "allocations"
    },
    timeseries: {
        properties: require("../../artifacts/config/core_data/timeseries_properties"),
        propertiesFileName: "timeseries_properties",
        mappings: require("../../artifacts/config/mapping/timeseries"),
        mappingsFileName: "timeseries"
    }
};

const configPath = path.resolve(process.cwd(), 'artifacts/config');
const mappingPath = path.join(configPath, 'mapping');
const coreDataPath = path.join(configPath, 'core_data');

async function generateProperties() {
    let options = await getOptions();
    console.log('got options');
    let existinDataElement = existing[options.type];
    if (existinDataElement) {
        let { properties, propertiesFileName, mappings, mappingsFileName } = existinDataElement;
        if (properties) {
            if (options.properties) {
                for (let newProperty of options.properties) {
                    for (let i = 0; i < properties.length; i++) {
                        let oldProperty = properties[i];
                        if (oldProperty.code === newProperty.code && oldProperty.entityType === newProperty.entityType) {
                            properties.splice(i, 1);
                            i--;
                        }
                    }
                    properties.push(newProperty);
                }
            }
            if (options.rootProperty) {
                let newProperty = options.rootProperty;
                for (let i = 0; i < properties.length; i++) {
                    let oldProperty = properties[i];
                    if (oldProperty.code === newProperty.code && oldProperty.entityType === newProperty.entityType) {
                        properties.splice(i, 1);
                        i--;
                    }
                }
                properties.push(newProperty);
            }
            let fileName = !existinDataElement.propertiesFileName.endsWith('.json') ? existinDataElement.propertiesFileName + '.json' : existinDataElement.propertiesFileName;
            let filePath = path.join(coreDataPath, fileName);
            fs.writeFileSync(filePath, JSON.stringify(properties, null, 4), 'utf8');
        }
        if (mappings && options.mapping) {
            let newMapping = options.mapping;
            for (let i = 0; i < mappings.length; i++) {
                let oldMapping = mappings[i];
                if (oldMapping.type === newMapping.type) {
                    mappings.splice(i, 1);
                    i--;
                }
            }
            mappings.push(newMapping);

            let fileName = !existinDataElement.mappingsFileName.endsWith('.json') ? existinDataElement.mappingsFileName + '.json' : existinDataElement.mappingsFileName;
            let filePath = path.join(mappingPath, fileName);
            fs.writeFileSync(filePath, JSON.stringify(mappings, null, 4), 'utf8');
        }
        generateInterfaces(options, properties, mappings);
    }
    process.exit(0);
}

function getInterfaceType(dataType: DataType) {
    let response = "string";
    switch (dataType) {
        case "BOOL":
            response = "boolean";
            break;
        case "ITGR":
        case "DCML":
            response = "number";
            break;
        case "DATE":
        case "DTIM":
        case "STRG":
        default:
            response = "string";
            break;
    }
    return response;
}

function generateInterfaces(options: IOptions, properties: IPropertyDescriptor[], mappings: IMapping[]) {
    let tab = '    ';

    if (options.type === "entity") {
        let interfaceProperties: {[property: string]: string } = {};
        properties.map(property => {
            let interfaceType = getInterfaceType(property.dataType);
            interfaceProperties[property.code] = `${tab}${property.code}?: ${interfaceType};`;            
        });
        createInterfaceFile(interfaceProperties, options.type);
    }
    else {
        mappings.map(mapping => {
            let interfaceProperties: {[property: string]: string } = {};
            mapping.mappings.map(map => {
                let interfaceType = getInterfaceType(map.dataType);
                interfaceProperties[map.code] = `${tab}${map.code}?: ${interfaceType};`;
            });
            createInterfaceFile(interfaceProperties, mapping.type);
        });
    }

}

function createInterfaceFile(interfaceProperties: {[property: string]: string }, baseName: string) {
    const interfacePath = path.resolve(process.cwd(), 'artifacts/tool_interfaces');
    if (!fs.existsSync(interfacePath)) {
        console.log('interfacePath', interfacePath);
        interfacePath
            .split('/')
            .reduce((accPath, folder) => {
                accPath = path.join(accPath, folder);
                if (!fs.existsSync(accPath)) {
                    fs.mkdirSync(accPath);
                }
                return accPath;
            }, '~/');
    }
    let interfaceName = `I${changeCase.pascal(baseName)}`;
    let uniqueInterfaceProperties = Object.keys(interfaceProperties).reduce((acc, key) => { acc.push(interfaceProperties[key]); return acc}, []);
    let fileContent = `export interface ${interfaceName} {
${uniqueInterfaceProperties.join('\n')}
}`;
    let filePath = path.join(interfacePath, `${interfaceName}.ts`);
    fs.writeFileSync(filePath, fileContent, 'utf8');
}

generateProperties();

