import { IPropertyDescriptor, DataType, IPropertyPub, IFund, IShareClass, EntityType } from "@kurtosys/udm_data_toolkit";
import { IMapping } from "../models";
import { safe, firstOrDefault, isNullOrUndefined, getValueFromComplexKeyIdentifier } from "../utils";
import { CLIENT_CODE_KEY, ISIN_KEY } from "../constants";
import * as moment from "moment";

export function getDefaultValueForType(type: DataType | undefined, allowNull = false) {
	let response: any = null;
	if (!allowNull) {
		switch (type) {
			case "STRG":
				response = "";
				break;
			case "DCML":
			case "ITGR":
				response = 0;
				break;
			case "DATE":
			case "DTIM":
				response = "1970-01-01";
				break;
			case "BOOL":
				response = false;
				break;
			default:
				response = null;
				break;
		}
	}
	return response;
}

export function processPropertiesPub(instance: {}, properties: IPropertyDescriptor[]): IPropertyPub {
	let response = {};
	for (let property of properties) {
		response[property.code] = { value: getPropertyValue(instance, property) };
	}
	return response;
}

export function getPropertyValue(instance: {}, property: IPropertyDescriptor | undefined | null, allowNull = false): any {
	if (!property) {
		return allowNull ? null : "";
	}
	let defaultValue = getDefaultValueForType(property.dataType, allowNull);
	let propertyKey = property.hasOwnProperty("sourceField") ? "sourceField" : "label";
	let itemKey = property[propertyKey];
	let value = getValueFromComplexKeyIdentifier(itemKey, instance, defaultValue);
	
	switch (property.dataType) {
		case "STRG":
			if (value) {
				value = value.toString();
			}			
			break;
		case "DCML":
			value = parseFloat(value);
			break;
		case "ITGR":
			value = parseInt(value, 10);
			break;
		case "BOOL":
			let boolTrueValues = ["true", "t", "yes", "y", "1", "on", "confirm"];
			value = boolTrueValues.indexOf(value.toString().toLowerCase()) > -1;
			break;
		case "DATE":
		case "DTIM":
			if (!isNaN(value)) {
				value = parseInt(value, 10);
				value = moment(new Date((value - (25569)) * 86400 * 1000)).format('YYYY-MM-DD');
			}
			break;
		default:
			break;
	}
	return value;
}

export function processFundOrShareClass(entityType: EntityType, record: {}, properties: IPropertyDescriptor[]): IFund | IShareClass {

	let clientCodeProperty = getClientCodeProperty(properties);
	let clientCode = getPropertyValue(record, clientCodeProperty);
	let propertiesPub = processPropertiesPub(record, properties);
	let response = {
		type: entityType,
		clientCode,
		propertiesPub
	};
	return <IFund | IShareClass>response;
}

export function getPropertyValueByCode(instance: {}, code: string, properties: IPropertyDescriptor[], allowNull = false): any {
	let property = getPropertyByCode(code, properties);
	return getPropertyValue(instance, property, allowNull);
}

export function getPropertyByCode(code: string, properties: IPropertyDescriptor[]): IPropertyDescriptor | undefined | null {
	let property = firstOrDefault(properties.filter(property => property.code === code));
	return property;
}

export function getFirstPropertyFromCodes(codes: string[], properties: IPropertyDescriptor[]): IPropertyDescriptor | undefined | null {
	let property = firstOrDefault(properties.filter(property => codes.indexOf(property.code) > -1));
	return property;
}

export function getClientCodeProperty(properties: IPropertyDescriptor[]): IPropertyDescriptor {
	let clientCodeProperty = getFirstPropertyFromCodes([CLIENT_CODE_KEY, ISIN_KEY], properties);
	if (isNullOrUndefined(clientCodeProperty)) {
		throw new Error("No client code field mapped");
	}
	return clientCodeProperty;
}

export function getLabelValueProperty(inputValue: string, labelValueProperties: IPropertyDescriptor[]) {
	let labelValueProperty = firstOrDefault(labelValueProperties.filter(property => property.label && property.label.toLowerCase() === inputValue.toLowerCase()));
	return labelValueProperty;
}


export function getPeriodicityValue(value: string = 'monthly') {
	let response = "MONTHLY"; // default value set
	value = value.toLowerCase();
	let possibleValues = {
		"DAILY": ["1", "d", "day", "daily", "dly"],
		"WEEKLY": ["7", "w", "week", "weekly", "wkly"],
		"MONTHLY": ["30", "m", "month", "monthly", "mnthly"],
		"QUARTERLY": ["90", "q", "quarter", "quarterly", "qrtrly"],
		"YEARLY": ["365", "y", "year", "yearly", "yrly"]
	};
	for (let key of Object.keys(possibleValues)) {
		let values = possibleValues[key];
		if (values.indexOf(value) > -1) {
			response = key;
			break;
		}
	}
	return response;
}

function getMappingByType(type: string, mappings: IMapping[]) {
	console.log(mappings);
	let mapping = safe(() => mappings.filter(m => m.type === type)[0], null);
	if (!mapping) {
		mapping = safe(() => mappings.filter(m => m.type === '_default')[0], null);
	}
	return mapping;
}

export function processValueCollection(collectionType: string, rows, labelValueProperties, mappings: IMapping[], isLabelCollection: boolean = true, periodicity: string = 'MONTHLY', entityType: "CLSS" | "FUND" = "CLSS"): {}[] {
	let hash = {};	
	let explicitMapping = getMappingByType(collectionType, mappings);
	if (!explicitMapping) {
		console.log("No mapping found to process");
		return [];
	}
	if (!explicitMapping.mappings || explicitMapping.mappings.length === 0) {
		console.log("No mappings setup to process, mappings is null or length is 0");
		return [];
	}
	let mappingProperties = explicitMapping.mappings;
	for (let row of rows) {
		
		let clientCodeProperty = getClientCodeProperty(mappingProperties);
		let clientCode = getPropertyValue(row, clientCodeProperty);		
		let label = getPropertyValueByCode(row, "label", mappingProperties);
		let value = getPropertyValueByCode(row, "value", mappingProperties);
		let date = getPropertyValueByCode(row, "date", mappingProperties);
		let ccy = getPropertyValueByCode(row, "ccy", mappingProperties, true) || "N/A";
		
		let property = getPropertyByCode(collectionType, labelValueProperties);
		if (property) {
			let { code } = property;
			if (!hash[clientCode]) {
				hash[clientCode] = {}
			}
			let fundData = hash[clientCode];
			if (!fundData[code]) {
				fundData[code] = {
					entityType,
					clientCode,
					code,
					ccy,
					"values": []
				};
			}
			let labelValueObj = fundData[code];
			let valueObj = <{
				value: any,
				label?: string,
				date?: string,
				[properties: string]: any
			}>{
					value
				};
			if (isLabelCollection) {
				valueObj.label = label;
			}
			else {
				let inputPeriodicity = getPropertyValueByCode(row, "periodicity", mappingProperties);
				fundData[code].periodicity = getPeriodicityValue(inputPeriodicity) || periodicity;
				let inputClassification = getPropertyValueByCode(row, "classification", mappingProperties);
				fundData[code].classification = inputClassification || "N/A";
				valueObj.date = date;
			}
			labelValueObj.values.push(valueObj);
			if (property.extended) {
				for (let extendedProperty of property.extended) {
					let mappingProperty = getPropertyByCode(extendedProperty.label, mappingProperties);
					if (mappingProperty) {
						let extendedValue = getPropertyValue(row, mappingProperty);
						valueObj[mappingProperty.code] = extendedValue;	
					}					
				}
			}
		}
	}
	
	let response = [];
	Object.keys(hash).map(clientCode => {
		Object.keys(hash[clientCode]).map(code => {
			response.push(hash[clientCode][code]);
		})
	});
	return response;
}
