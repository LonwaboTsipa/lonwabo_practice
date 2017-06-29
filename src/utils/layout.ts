import * as fs from "fs";
import * as path from "path";
import * as changeCase from "change-case";
const componentsMeta = require("../../artifacts/config/layout/componentsMeta");
const schemaTemplate = require("../../artifacts/config/layout/schemaTemplate");
import { ILayoutConfigurationType } from "../models";
import { rootDir } from "../constants";
function getRootClone(component) {
    let jsonText = schemaTemplate;
    let schema = replaceTextFromComponent(jsonText, component);
    return schema;
}

function replaceTextFromComponent(json, component) {
    let jsonText = JSON.stringify(json);
    let placeHolders = [
        { key: 'CODE', dataKey: 'code' },
        { key: 'NAME', dataKey: 'name' },
        { key: 'DESCRIPTION', dataKey: 'description' },
        { key: 'PREFIX', dataKey: 'prefix' }
    ];
    for (let placeHolder of placeHolders) {
        let { key, dataKey } = placeHolder;
        jsonText = jsonText.split(`{{${key}}}`).join(component[dataKey]);
    }
    return JSON.parse(jsonText);
}

function getPropertiesClone(component) {
    let schema = schemaTemplate.schema.properties;
    return replaceTextFromComponent(schema, component);
}

function getFormDefinitionClone(component) {
    let schema = schemaTemplate.schema.formDefinition;
    return replaceTextFromComponent(schema, component);
}
const layoutArtifactsPath = path.resolve(process.cwd(), 'artifacts/config/layout');
const componentPath = path.join(layoutArtifactsPath, 'components');
const configurationsPath = path.join(layoutArtifactsPath, 'configurations');

export function generateComponents() {
    let recursionLimit = 10;
    let allComponents = [];
    for (let componentMeta of componentsMeta) {
        let root = getRootClone(componentMeta);
        let output = "";
        let properties = root.schema.properties;
        let formDefinition = root.schema.formDefinition;
        for (let i = 0; i < recursionLimit; i++) {
            componentMeta.prefix += '.elements[]';
            let newFormDefinition = getFormDefinitionClone(componentMeta);
            let newProperties = getPropertiesClone(componentMeta);

            formDefinition[1].items.push(...newFormDefinition);
            properties.elements.items.properties = newProperties;

            properties = newProperties;
            formDefinition = newFormDefinition;
        }
        delete properties.elements.items;
        allComponents.push(root);
        output = JSON.stringify(root, null, 4);
        fs.writeFileSync(path.join(componentPath, `${componentMeta.code}.json`), output, { encoding: 'utf8' });
    }
    //fs.writeFileSync(path.join(componentPath, `all.json`), JSON.stringify(allComponents), { encoding: 'utf8' });    
}

export function generateConfigurationTemplate(layoutConfigurationType: ILayoutConfigurationType) {
    let output = {};
    let { componentCodes } = layoutConfigurationType;
    // Component codes need to be set on the layout configuration type otherwise we dont know how to generate the 
    // underlying template
    for (let componentMeta of componentsMeta.filter(c => componentCodes.indexOf(c.code) > -1)) {
        output[componentMeta.code] = componentMeta.layout;
    }
    output = JSON.stringify(output, null, 4);
    let filePath = getLayoutConfigurationTypeTemplatePath(layoutConfigurationType);
    fs.writeFileSync(filePath, output, { encoding: 'utf8' });
}

export function getLayoutConfigurationTypeTemplate(layoutConfigurationType: ILayoutConfigurationType) {
    let templatePath = getLayoutConfigurationTypeTemplatePath(layoutConfigurationType);
    let response: any = null;
    if (fs.existsSync(templatePath)) {
        let text = fs.readFileSync(templatePath, { encoding: 'utf8' });
        try {
            response = JSON.parse(text);
        }
        catch (ex) {
            console.error(`Could not parse JSON for ${templatePath}`);
        }
    }
    else {
        console.error(`Could not find template: ${templatePath}`);
    }
    return response;
}


export function getLayoutConfigurationTypeTemplatePath(layoutConfigurationType: ILayoutConfigurationType) {
    let folder = getLayoutConfigurationPath(layoutConfigurationType);
    return path.join(folder, 'template.json')
}

export function getLayoutConfigurationPath(layoutConfigurationType: ILayoutConfigurationType) {
    let { type } = layoutConfigurationType;
    let folder = changeCase.snake(type);
    let templatePath = path.resolve(rootDir, `config/layout/configurations/${type}`);
    if (!fs.existsSync(templatePath)) {
        templatePath
            .split('/')
            .reduce((accPath, folder) => {
                accPath = path.join(accPath, folder);
                if (!fs.existsSync(accPath)) {
                    fs.mkdirSync(accPath);
                }
                return accPath;
            }, '');
    }
    return templatePath;
}