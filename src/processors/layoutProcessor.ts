import { dataLoadingArray } from "@kurtosys/udm_data_toolkit";
import { rootDir } from "../constants";
import {
	IFundOrShareClass,
	IOrchestratedManifest,
	ILayoutConfigurationType,
	ILayoutConfigurationTypeTagOption,
	IAtomElement,
	ILayoutFileMapping,
	ILayoutFile
} from "../models";
import { fetchAllLayoutConfigurations } from "../services";
import {
	safe,
	isNullOrUndefined,
	isNullOrWhitespace,
	concatDataToLoad,
	getValueFromStringNotation,
	getLayoutConfigurationPath,
	getLayoutConfigurationTypeTemplate,
	getLayoutConfigurationTypeTemplatePath,
	FONT_COLORS,
	styleConsoleText
} from "../utils";
const layoutConfigurationTypes = require("../../artifacts/config/layout/layoutConfigurationTypes");


import * as fs from "fs";
import * as path from "path";
import { loadFiles, listFiles } from "@kurtosys/ksys_utils/dist/file";
import * as changeCase from "change-case";

const KEY_SEPARATOR = '-';

const tagSortFn = (a, b) => a.order - b.order;

//let properties = require("../../allocation_properties");
export function getKeyFromInstance(layoutConfigurationType: ILayoutConfigurationType, options) {
	let { tags } = layoutConfigurationType;
	let tagValues = [];
	for (let tag of tags.sort(tagSortFn)) {
		let { key, selector } = tag;
		let value = getValueFromStringNotation(selector, options);
		if (isNullOrUndefined(value)) {
			value = key;
		}
		tagValues.push(value);
	}
	return tagValues.join(KEY_SEPARATOR);
}

export function getTagFromInstance(layoutConfigurationType: ILayoutConfigurationType, options) {
	let { tags } = layoutConfigurationType;
	return tags.sort(tagSortFn).reduce((acc, tag) => {
		let { key, selector } = tag;
		let value = getValueFromStringNotation(selector, options);
		if (!isNullOrUndefined(value)) {
			acc[key] = value;
		}
		return acc;
	}, {});
}

export function getKeyFromTagObject(layoutConfigurationType: ILayoutConfigurationType, layoutTags) {
	let { tags } = layoutConfigurationType;
	let tagValues = [];
	for (let tag of tags.sort(tagSortFn)) {
		let { key, selector } = tag;
		let value = getValueFromStringNotation(key, layoutTags);
		if (isNullOrUndefined(value)) {
			value = key;
		}
		tagValues.push(value);
	}
	return tagValues.join(KEY_SEPARATOR);
}

export function getTagFromKey(layoutConfigurationType: ILayoutConfigurationType, key: string) {
	let { tags } = layoutConfigurationType;
	let response = {};
	let keySplit = key.split(KEY_SEPARATOR);
	let sortedTags = tags.sort(tagSortFn);
	for (let i = 0; i < sortedTags.length; i++) {
		let tag = sortedTags[i];
		if (keySplit.length > i) {
			let value = keySplit[i];
			if (value !== tag.key) {
				response[tag.key] = value;
			}
		}
	}
	return response;
}

export async function processLayouts(funds: IFundOrShareClass[], manifest: IOrchestratedManifest, token: string): Promise<dataLoadingArray> {
	let dataToLoad = new dataLoadingArray();
	dataToLoad = concatDataToLoad(dataToLoad, processLayoutComponents(), await processLayoutConfigurations(funds, manifest, token));
	return dataToLoad;
}

function processLayoutComponents() {
	console.log('processLayoutComponents');
	let response = new dataLoadingArray();
	if (!response["layoutComponents"]) {
		response["layoutComponents"] = [];
	}
	let componentFiles = listFiles(path.join(rootDir, 'config/layout/components'), "");	
	if (componentFiles && componentFiles.length > 0) {
		let componentFilesWithContent = loadFiles(componentFiles);
		componentFilesWithContent.map(componentFileWithContent => {
			let fileJson: any = null;
			try {
				fileJson = JSON.parse(componentFileWithContent.data);
			}
			catch (ex) {
				console.log('Error while parsing component file to json');
			}
			if (fileJson && typeof fileJson === 'object') {
				response["layoutComponents"].push(fileJson);
			}
		});
	}	
	return response;
}
let colorIndex = 0;
function randomLog(text) {
	let colors = [FONT_COLORS.lightBlue, FONT_COLORS.lightRed, FONT_COLORS.lightGreen, FONT_COLORS.lightMagenta, FONT_COLORS.lightCyan, FONT_COLORS.lightYellow];
	console.log(styleConsoleText(text, colors[colorIndex]));
	colorIndex++;
	if (colorIndex >= colors.length) {
		colorIndex = 0;
	}
}

export async function processLayoutConfigurations(funds: IFundOrShareClass[], manifest: IOrchestratedManifest, token: string): Promise<dataLoadingArray> {
	
	let response = new dataLoadingArray();
	if (!response.layouts) {
		response.layouts = [];
	}


	// Add processing logic here
	if (funds && funds.length > 0) {		
		let shareClasses = funds.filter(fund => fund.type === 'CLSS');
		if (shareClasses && shareClasses.length > 0) {			
			for (let layoutConfigurationType of layoutConfigurationTypes) {				
				let predefinedLayoutTemplates: ILayoutFileMapping | null = getPredefinedLayoutTemplates(layoutConfigurationType);
				let layoutConfigurationTypeTemplate = getLayoutConfigurationTypeTemplate(layoutConfigurationType);
				let allLayoutConfigurations = await fetchAllLayoutConfigurations(token, layoutConfigurationType.type);

				// This is used when saving the layout configurations from one environment to file system. 
				// This migrates them from one environment to the next by saving them, then you need to remove 
				// the ones in the environment you want to update.
				// LEAVE COMMENTED OUT UNLESS YOU ARE SURE YOU KNOW HOW TO USE THIS
				saveLayoutConfigurationsToFiles(layoutConfigurationType, allLayoutConfigurations);


				let layoutsByTypeKey = allLayoutConfigurations.reduce((acc, layoutConfiguration) => {
					layoutConfiguration.existingLayoutConfigurationId = layoutConfiguration.layoutConfigurationId;
					layoutConfiguration.layoutConfigurationType = layoutConfigurationType.type;
					delete layoutConfiguration.layoutConfigurationId;
					delete layoutConfiguration.code;
					if (!layoutConfiguration.clientCodes || !Array.isArray(layoutConfiguration.clientCodes)) {
						delete layoutConfiguration.clientCodes;
					}
					let key = getKeyFromTagObject(layoutConfigurationType, layoutConfiguration.tags);
					acc[key] = layoutConfiguration;
					return acc;
				}, {});


				for (let shareClass of shareClasses) {
					let properties = shareClass.properties_pub || shareClass.propertiesPub;
					if (properties) {
						let options = { shareClass, properties };
						console.log('options', options);
						addLayoutConfigurationsForCurrentAndParents(layoutConfigurationType, options, predefinedLayoutTemplates, layoutsByTypeKey, layoutConfigurationTypeTemplate);
					}
				}
				for (let fundId of Object.keys(layoutsByTypeKey)) {
					let layout = layoutsByTypeKey[fundId];
					let hasChange = mergeMissingTemplateComponents(layout.configuration, layoutConfigurationTypeTemplate);
					if (hasChange || layout.isNew) {
						delete layout.isNew;
						delete layout.configuration_draft;
						response.layouts.push(layout);
					}
				}
			}
		}
	}	
	return response;
}

export function addLayoutConfigurationsForCurrentAndParents(layoutConfigurationType: ILayoutConfigurationType, options: any, predefinedLayoutTemplates, hashObject, layoutConfigurationTypeTemplate) {
	let key = getKeyFromInstance(layoutConfigurationType, options);
	addLayoutConfigurationForKey(layoutConfigurationType, key, predefinedLayoutTemplates, hashObject, layoutConfigurationTypeTemplate);

	let tag = getTagFromKey(layoutConfigurationType, key);
	let sortedTags = layoutConfigurationType.tags.sort(tagSortFn);
	for (let i = sortedTags.length - 1; i > 0; i--) {
		let currentLayoutTag = sortedTags[i];
		delete tag[currentLayoutTag.key];
		key = getKeyFromTagObject(layoutConfigurationType, tag);
		addLayoutConfigurationForKey(layoutConfigurationType, key, predefinedLayoutTemplates, hashObject, layoutConfigurationTypeTemplate);
	}
}

export function addLayoutConfigurationForKey(layoutConfigurationType: ILayoutConfigurationType, key: string, predefinedLayoutTemplates, hashObject, layoutConfigurationTypeTemplate) {
	if (!hashObject[key]) {
		let template = getLayoutConfigurationTemplate(layoutConfigurationType, key, predefinedLayoutTemplates, layoutConfigurationTypeTemplate);
		if (template) {
			let tags: any = getTagFromKey(layoutConfigurationType, key);
			let layoutConfiguration = {
				layoutConfigurationType: layoutConfigurationType.type,
				tags: tags,
				configuration: template,
				isNew: true
			};
			hashObject[key] = layoutConfiguration;
		}
	}
}

export function saveLayoutConfigurationsToFiles(layoutConfigurationType: ILayoutConfigurationType, allLayoutConfigurations: ITemplateResponse[]) {
	let basePath = getLayoutConfigurationPath(layoutConfigurationType);
	for (let layoutConfiguration of allLayoutConfigurations) {
		let { tags, configuration } = layoutConfiguration;
		if (tags) {
			let fileName = getKeyFromTagObject(layoutConfigurationType, tags);			
			let fullPath = path.resolve(basePath, fileName + ".json");
			let content = JSON.stringify(configuration);
			console.log('Saving file: ' + fileName);
			fs.writeFileSync(fullPath, content, "utf8");
		}
	}
}

export function getLayoutConfigurationTemplate(layoutConfigurationType: ILayoutConfigurationType, key: string, predefinedLayoutTemplates: ILayoutFileMapping, layoutConfigurationTypeTemplate): any | null {
	let response = null;
	if (predefinedLayoutTemplates[key]) {
		response = predefinedLayoutTemplates[key];
	}
	else {
		let tag = getTagFromKey(layoutConfigurationType, key);
		let sortedTags = layoutConfigurationType.tags.sort(tagSortFn);
		for (let i = sortedTags.length - 1; i >= 0; i--) {
			let currentLayoutTag = sortedTags[i];
			delete tag[currentLayoutTag.key];
			key = getKeyFromTagObject(layoutConfigurationType, tag);
			if (predefinedLayoutTemplates[key]) {
				response = predefinedLayoutTemplates[key];
				break;
			}
		}
	}
	if (!response) {
		response = layoutConfigurationTypeTemplate;
	}
	return response;
}

export function getPredefinedLayoutTemplates(layoutConfigurationType: ILayoutConfigurationType): ILayoutFileMapping {
	let layoutConfigurationsForType = getFilesForLayoutConfigurationType(layoutConfigurationType);
	let responseMapping = {};
	for (let layoutConfig of layoutConfigurationsForType) {
		let { json, tag } = layoutConfig;
		if (json) {
			let key = getKeyFromTagObject(layoutConfigurationType, tag);
			responseMapping[key] = json;
		}
	}
	return responseMapping;
}

export interface ITemplateResponse {
	tags: {
		fund_id?: string | null;
		isin?: string | null;
	};
	configuration: any;
}



function getFilesForLayoutConfigurationType(layoutConfigurationType: ILayoutConfigurationType): ILayoutFile[] {
	let directory = getLayoutConfigurationPath(layoutConfigurationType);
	if (fs.existsSync(directory)) {
		let files = fs.readdirSync(directory);
		let filteredFiles = files.filter(entry => {
			let extension = path.extname(entry);
			if (!entry || entry === 'template.json' || fs.statSync(directory + '/' + entry).isDirectory() || extension.toLowerCase() !== '.json') {
				return false;
			}
			return true;
		});

		let response = filteredFiles.map(filename => {
			let filePath = directory + '/' + filename;
			let fileContent = fs.readFileSync(filePath, "utf8");
			// CREATE TOKEN METHOD
			console.log(`reading file: ${filePath}`);
			let fileJson = JSON.parse(fileContent);
			let key = filename.substr(0, filename.length - 5);
			let tag = getTagFromKey(layoutConfigurationType, key);

			return {
				filename,
				tag,
				json: fileJson
			};
		});
		return response;
	}
	return [];

}

export function mergeMissingTemplateComponents(layout, template) {
	let hasChange = false;
	for (let key of Object.keys(template)) {
		if (!layout[key]) {
			layout[key] = template[key];
			hasChange = true;
		}
		let mergeResponse = mergeMissingTemplateFields(layout[key], template[key]);
		hasChange = mergeResponse || hasChange;
	}
	return hasChange;
}

function mergeMissingTemplateFields(layoutElementInput: IAtomElement, templateElementInput: IAtomElement) {
	let hasChange = false;
	let layoutElementsByKey: { [property: string]: IAtomElement } = getElementsByKey(layoutElementInput);
	let templateElementsByKey: { [property: string]: IAtomElement } = getElementsByKey(templateElementInput);
	let rootProperties = ["key", "label"];
	rootProperties.map(prop => {
		if (templateElementInput.elementProperties[prop] !== layoutElementInput.elementProperties[prop]) {
			layoutElementInput.elementProperties[prop] = templateElementInput.elementProperties[prop];
			hasChange = true;
		}
	})

	// Check layout element is missing
	for (let key of Object.keys(templateElementsByKey)) {
		let templateElement = templateElementsByKey[key];
		let layoutElement = layoutElementsByKey[key];
		if (!layoutElement) {
			layoutElementsByKey[key] = Object.assign({}, templateElement);
			hasChange = true;
		}
		else {
			if (templateElement.elementProperties.label !== layoutElement.elementProperties.label) {
				layoutElement.elementProperties.label = templateElement.elementProperties.label;
				hasChange = true;
			}
			if (templateElement.elements && templateElement.elements.length > 0) {
				let mergeResponse = mergeMissingTemplateFields(layoutElement, templateElement);
				hasChange = mergeResponse || hasChange;
			}
		}
	}
	// Check template has element removed
	for (let key of Object.keys(layoutElementsByKey)) {
		let templateElement = templateElementsByKey[key];
		let layoutElement = layoutElementsByKey[key];
		if (!templateElement) {
			delete layoutElementsByKey[key];
			hasChange = true;
		}
	}
	layoutElementInput.elements = Object.keys(layoutElementsByKey).map(key => layoutElementsByKey[key]);
	return hasChange;
}

function getElementsByKey(element: IAtomElement) {
	let elementsByKey = {};
	if (element.elements && element.elements.length > 0) {
		elementsByKey = element.elements.reduce((acc, element) => {
			if (element && element.elementProperties) {
				acc[element.elementProperties.key] = element;
			}
			return acc;
		}, {});
	}
	return elementsByKey;
}

