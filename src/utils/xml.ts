import * as xmlParser from "xml2json";
import * as fs from "fs";
import { safe } from "../utils";
export function convertXmlToJson(xml, xsdPath, parserOptions, options: SchemaChangeOptions = {}) {
	options = Object.assign({
		tagPrefix: "xs:"
	}, options);

	let schema = fs.readFileSync(xsdPath, { encoding: 'utf8' });	
	
	let json = xmlParser.toJson(xml, parserOptions);	
	let schemaJson = xmlParser.toJson(schema, parserOptions);
	cleanPropertyNames(json);
	//fs.writeFileSync('beforeSchemaAdjustment.json', JSON.stringify(json, null, 4), { encoding: 'utf8' });

	applySchemaChangesForArrays(json, schemaJson, options);

	//fs.writeFileSync('afterSchemaAdjustment.json', JSON.stringify(json, null, 4), { encoding: 'utf8' });
	return json;
}

export interface SchemaChangeOptions {
	tagPrefix?: string;
}

function cleanPropertyNames(json) {
	Object.keys(json).filter(key => key.startsWith('_')).map(key => {
		let cleanKey = key.substr(1);
		json[cleanKey] = json[key];
		delete json[key];
	});
	Object.keys(json).map((key) => {
		let value = json[key];
		if (typeof value === 'object') {
			let values = [];
			if (Array.isArray(value)) {
				values = [].concat(value);
			}
			else {
				values = [value];
			}
			values.map(v => {
				cleanPropertyNames(v);
			});
		}
	})
}

function applySchemaChangesForArrays(json, schemaJson, options: SchemaChangeOptions = {}) {
	options = Object.assign({
		tagPrefix: "xs:"
	}, options);

	

	const { tagPrefix } = options;
	const schemaKey = `${tagPrefix}schema`;
	const complexTypeKey = `${tagPrefix}complexType`;
	const sequenceKey = `${tagPrefix}sequence`;
	const simpleContentKey = `${tagPrefix}simpleContent`;
	const elementKey = `${tagPrefix}element`;
	if (schemaJson[schemaKey] && schemaJson[schemaKey][elementKey]) {
		schemaJson = schemaJson[schemaKey][elementKey];
	}
	let schemaElements = [];
	if (Array.isArray(schemaJson)) {
		schemaElements = [].concat(schemaJson);
	}
	else {
		schemaElements.push(schemaJson);
	}

	for (let schemaElement of schemaElements) {
		if (json.hasOwnProperty(schemaElement.name) && json[schemaElement.name]) {
			let jsonElement = json[schemaElement.name];
			
			let isArray = Array.isArray(jsonElement);
			if (schemaElement[complexTypeKey]) {
				let complexTypeChild = schemaElement[complexTypeKey];
				let arraySchemaChild = (complexTypeChild[sequenceKey] || complexTypeChild[simpleContentKey]);
				let schemaChildElement = safe(() => arraySchemaChild[elementKey], {});
				
				if (!isArray && arraySchemaChild && schemaElement.maxOccurs) {
					json[schemaElement.name] = [jsonElement];
					jsonElement = json[schemaElement.name];
				}
				isArray = Array.isArray(jsonElement);

				if (schemaChildElement) {
					let jsonChildElements = isArray ? [].concat(jsonElement) : [jsonElement];

					for (let jsonChildElement of jsonChildElements) {						
						applySchemaChangesForArrays(jsonChildElement, schemaChildElement, options);
					}
				}
			}
		}
	}
}