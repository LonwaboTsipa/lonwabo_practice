import { IPropertyDescriptor, DataType, IPropertyPub } from "@kurtosys/udm_data_toolkit";
import {
	getClientCodeProperty, getPropertyValueByCode, getPropertyByCode,
	getDefaultValueForType, processPropertiesPub, getPropertyValue,
	processValueCollection, getPeriodicityValue, processLinkedDocumentCollection,
	processTranslationCollection, processCommentaryCollection, processDisclaimerCollection,
	processFundListCollection
} from './processor';
import { IMapping } from "../models";

describe("processor", () => {
	let baseProperty = <IPropertyDescriptor>{
		"code": "test",
		"entityType": "FUND",
		"validationRule": "NONE",
		"group": "core",
		"description": "A description",
		"cardinality": "1"
	}
	describe("getDefaultValueForType", () => {
		it("will return null when allowed", () => {
			let dataTypes = <DataType[]>["STRG", "DCML", "ITGR", "DATE", "DTIM", "BOOL"];
			for (let dataType of dataTypes) {
				expect(getDefaultValueForType(dataType, true)).toBeNull();
			}
			expect(getDefaultValueForType(undefined, true)).toBeNull();
		});
		it("will return a null when dataType is invalid", () => {
			let type = "invalid";
			expect(getDefaultValueForType(type as DataType)).toEqual(null);
		});
		it("will return a blank string when dataType is 'STRG'", () => {
			expect(getDefaultValueForType("STRG")).toEqual("");
		});
		it("will return zero when dataType is 'DCML' or 'ITGR'", () => {
			expect(getDefaultValueForType("DCML")).toEqual(0);
			expect(getDefaultValueForType("ITGR")).toEqual(0);
		});
		it("will return '1970-01-01' when dataType is 'DATE' or 'DTIM'", () => {
			let dateDefault = '1970-01-01';
			expect(getDefaultValueForType("DATE")).toEqual(dateDefault);
			expect(getDefaultValueForType("DTIM")).toEqual(dateDefault);
		});
		it("will return false when dataType is 'BOOL'", () => {
			expect(getDefaultValueForType("BOOL")).toEqual(false);
		});
	});
	describe("processPropertiesPub", () => {
		it("will return false when dataType is 'BOOL'", () => {
			let instance = {
				"String Value": "testCode",
				"Decimal Value": "1.23",
				"Integer Value": "1",
				"Boolean Value": "true"
			};
			let properties = [
				Object.assign({}, baseProperty, {
					"code": "string_value",
					"dataType": "STRG",
					"sourceField": "String Value"
				}),
				Object.assign({}, baseProperty, {
					"code": "decimal_value",
					"dataType": "DCML",
					"sourceField": "Decimal Value"
				}),
				Object.assign({}, baseProperty, {
					"code": "integer_value",
					"dataType": "ITGR",
					"sourceField": "Integer Value"
				}),
				Object.assign({}, baseProperty, {
					"code": "boolean_value",
					"dataType": "BOOL",
					"sourceField": "Boolean Value"
				})
			];
			let expectedResult = {
				"string_value": { value: "testCode" },
				"decimal_value": { value: 1.23 },
				"integer_value": { value: 1 },
				"boolean_value": { value: true }
			};
			expect(processPropertiesPub(instance, properties)).toEqual(expectedResult);
		});
	});
	describe("getPropertyValue", () => {
		let instance = {
			"String Value": "testCode",
			"Decimal Value": "1.23",
			"Integer Value": "1",
			"Boolean Value": "true",
			"Boolean Value T": "T",
			"Boolean Value t": "t",
			"Boolean Value TRUE": "TRUE",
			"Boolean Value true": "true",
			"Boolean Value True": "True",
			"Boolean Value Y": "Y",
			"Boolean Value y": "y",
			"Boolean Value YES": "YES",
			"Boolean Value yes": "yes",
			"Boolean Value Yes": "Yes",
			"Boolean Value ON": "ON",
			"Boolean Value on": "on",
			"Boolean Value On": "On",
			"Boolean Value 1": "1",
			"Boolean Value False": "False",
			"Boolean Unknown": "NOT A BOOL",
			"Date Value": "2000-01-01",
			"DateTime Value": "2000-01-01 00:00:00",
			"Excel Date Value": 42370
		};
		let properties = {
			"stringWithSourceField": <IPropertyDescriptor>(Object.assign({}, baseProperty, {
				"dataType": "STRG",
				"label": "String Value Test",
				"sourceField": "String Value"
			})),
			"stringWithNoSourceField": <IPropertyDescriptor>(Object.assign({}, baseProperty, {
				"dataType": "STRG",
				"label": "String Value"
			})),
			"stringMissingProperty": <IPropertyDescriptor>(Object.assign({}, baseProperty, {
				"dataType": "STRG",
				"label": "Unavailable"
			})),
			"decimalWithSourceField": <IPropertyDescriptor>(Object.assign({}, baseProperty, {
				"dataType": "DCML",
				"label": "Decimal Value Test",
				"sourceField": "Decimal Value"
			})),
			"decimalWithNoSourceField": <IPropertyDescriptor>(Object.assign({}, baseProperty, {
				"dataType": "DCML",
				"label": "Decimal Value"
			})),
			"decimalMissingProperty": <IPropertyDescriptor>(Object.assign({}, baseProperty, {
				"dataType": "DCML",
				"label": "Unavailable"
			})),
			"integerWithSourceField": <IPropertyDescriptor>(Object.assign({}, baseProperty, {
				"dataType": "ITGR",
				"label": "Integer Value Test",
				"sourceField": "Integer Value"
			})),
			"integerWithNoSourceField": <IPropertyDescriptor>(Object.assign({}, baseProperty, {
				"dataType": "ITGR",
				"label": "Integer Value"
			})),
			"integerMissingProperty": <IPropertyDescriptor>(Object.assign({}, baseProperty, {
				"dataType": "ITGR",
				"label": "Unavailable"
			})),
			"booleanWithSourceField": <IPropertyDescriptor>(Object.assign({}, baseProperty, {
				"dataType": "BOOL",
				"label": "Boolean Value Test",
				"sourceField": "Boolean Value"
			})),
			"booleanWithNoSourceField": <IPropertyDescriptor>(Object.assign({}, baseProperty, {
				"dataType": "BOOL",
				"label": "Boolean Value"
			})),
			"booleanMissingProperty": <IPropertyDescriptor>(Object.assign({}, baseProperty, {
				"dataType": "BOOL",
				"label": "Unavailable"
			})),
			"booleanT": <IPropertyDescriptor>(Object.assign({}, baseProperty, {
				"dataType": "BOOL",
				"label": "Boolean Value T"
			})),
			"booleant": <IPropertyDescriptor>(Object.assign({}, baseProperty, {
				"dataType": "BOOL",
				"label": "Boolean Value t"
			})),
			"booleanTRUE": <IPropertyDescriptor>(Object.assign({}, baseProperty, {
				"dataType": "BOOL",
				"label": "Boolean Value TRUE"
			})),
			"booleantrue": <IPropertyDescriptor>(Object.assign({}, baseProperty, {
				"dataType": "BOOL",
				"label": "Boolean Value true"
			})),
			"booleanTrue": <IPropertyDescriptor>(Object.assign({}, baseProperty, {
				"dataType": "BOOL",
				"label": "Boolean Value True"
			})),
			"boolean1": <IPropertyDescriptor>(Object.assign({}, baseProperty, {
				"dataType": "BOOL",
				"label": "Boolean Value 1"
			})),
			"booleanY": <IPropertyDescriptor>(Object.assign({}, baseProperty, {
				"dataType": "BOOL",
				"label": "Boolean Value Y"
			})),
			"booleany": <IPropertyDescriptor>(Object.assign({}, baseProperty, {
				"dataType": "BOOL",
				"label": "Boolean Value y"
			})),
			"booleanYES": <IPropertyDescriptor>(Object.assign({}, baseProperty, {
				"dataType": "BOOL",
				"label": "Boolean Value YES"
			})),
			"booleanyes": <IPropertyDescriptor>(Object.assign({}, baseProperty, {
				"dataType": "BOOL",
				"label": "Boolean Value yes"
			})),
			"booleanYes": <IPropertyDescriptor>(Object.assign({}, baseProperty, {
				"dataType": "BOOL",
				"label": "Boolean Value Yes"
			})),
			"booleanON": <IPropertyDescriptor>(Object.assign({}, baseProperty, {
				"dataType": "BOOL",
				"label": "Boolean Value ON"
			})),
			"booleanon": <IPropertyDescriptor>(Object.assign({}, baseProperty, {
				"dataType": "BOOL",
				"label": "Boolean Value on"
			})),
			"booleanOn": <IPropertyDescriptor>(Object.assign({}, baseProperty, {
				"dataType": "BOOL",
				"label": "Boolean Value On"
			})),
			"booleanFalse": <IPropertyDescriptor>(Object.assign({}, baseProperty, {
				"dataType": "BOOL",
				"label": "Boolean Value False"
			})),
			"booleanUnknown": <IPropertyDescriptor>(Object.assign({}, baseProperty, {
				"dataType": "BOOL",
				"label": "Boolean Value Unknown"
			})),
			"dateWithSourceField": <IPropertyDescriptor>(Object.assign({}, baseProperty, {
				"dataType": "DATE",
				"label": "Date Value Test",
				"sourceField": "Date Value"
			})),
			"dateWithNoSourceField": <IPropertyDescriptor>(Object.assign({}, baseProperty, {
				"dataType": "DATE",
				"label": "Date Value"
			})),
			"dateMissingProperty": <IPropertyDescriptor>(Object.assign({}, baseProperty, {
				"dataType": "DATE",
				"label": "Unavailable"
			})),
			"dateTimeWithSourceField": <IPropertyDescriptor>(Object.assign({}, baseProperty, {
				"dataType": "DTIM",
				"label": "DateTime Value Test",
				"sourceField": "DateTime Value"
			})),
			"dateTimeWithNoSourceField": <IPropertyDescriptor>(Object.assign({}, baseProperty, {
				"dataType": "DTIM",
				"label": "DateTime Value"
			})),
			"dateTimeMissingProperty": <IPropertyDescriptor>(Object.assign({}, baseProperty, {
				"dataType": "DTIM",
				"label": "Unavailable"
			}))
		};
		it("will return blank string when undefined property is passed", () => {
			let property;
			expect(getPropertyValue(instance, property)).toEqual("");
		});
		it("will return null if allowed and undefined property is passed", () => {
			let property;
			expect(getPropertyValue(instance, property, true)).toBeNull();
		});
		it("will get a string value, sourceField set", () => {
			expect(getPropertyValue(instance, properties.stringWithSourceField)).toEqual("testCode");
		});
		it("will get a string value, sourceField not set", () => {
			expect(getPropertyValue(instance, properties.stringWithNoSourceField)).toEqual("testCode");
		});
		it("will get a string value, empty", () => {
			expect(getPropertyValue(instance, properties.stringMissingProperty)).toEqual("");
		});
		it("will get a decimal value, sourceField set", () => {
			expect(getPropertyValue(instance, properties.decimalWithSourceField)).toEqual(1.23);
		});
		it("will get a decimal value, sourceField not set", () => {
			expect(getPropertyValue(instance, properties.decimalWithNoSourceField)).toEqual(1.23);
		});
		it("will get a decimal value, zero", () => {
			expect(getPropertyValue(instance, properties.decimalMissingProperty)).toEqual(0);
		});
		it("will get a integer value, sourceField set", () => {
			expect(getPropertyValue(instance, properties.integerWithSourceField)).toEqual(1);
		});
		it("will get a integer value, sourceField not set", () => {
			expect(getPropertyValue(instance, properties.integerWithNoSourceField)).toEqual(1);
		});
		it("will get a integer value, zero", () => {
			expect(getPropertyValue(instance, properties.integerMissingProperty)).toEqual(0);
		});
		it("will get a boolean value, sourceField set", () => {
			expect(getPropertyValue(instance, properties.booleanWithSourceField)).toEqual(true);
		});
		it("will get a boolean value, sourceField not set", () => {
			expect(getPropertyValue(instance, properties.booleanWithNoSourceField)).toEqual(true);
		});
		it("will get a boolean value, zero", () => {
			expect(getPropertyValue(instance, properties.booleanMissingProperty)).toEqual(false);
		});
		let booleanProperties = [
			properties.boolean1,
			properties.booleanT,
			properties.booleant,
			properties.booleanTRUE,
			properties.booleantrue,
			properties.booleanTrue,
			properties.booleanY,
			properties.booleany,
			properties.booleanYES,
			properties.booleanyes,
			properties.booleanYes,
			properties.booleanON,
			properties.booleanon,
			properties.booleanOn
		];
		for (let booleanProperty of booleanProperties) {
			it(`will get a boolean value from ${booleanProperty.label}`, () => {
				expect(getPropertyValue(instance, booleanProperty)).toEqual(true);
			});
		}
		it(`will get a false boolean value from false`, () => {
			expect(getPropertyValue(instance, properties.booleanFalse)).toEqual(false);
		});
		it(`will get a false boolean value from an invalid boolean`, () => {
			expect(getPropertyValue(instance, properties.booleanUnknown)).toEqual(false);
		});
		it("will get a date value, sourceField set", () => {
			expect(getPropertyValue(instance, properties.dateWithSourceField)).toEqual('2000-01-01');
		});
		it("will get a date value, sourceField not set", () => {
			expect(getPropertyValue(instance, properties.dateWithNoSourceField)).toEqual('2000-01-01');
		});
		it("will get a date value, 1970-01-01", () => {
			expect(getPropertyValue(instance, properties.dateMissingProperty)).toEqual('1970-01-01');
		});
		it("will get a date time value, sourceField set", () => {
			expect(getPropertyValue(instance, properties.dateTimeWithSourceField)).toEqual('2000-01-01 00:00:00');
		});
		it("will get a date time value, sourceField not set", () => {
			expect(getPropertyValue(instance, properties.dateTimeWithNoSourceField)).toEqual('2000-01-01 00:00:00');
		});
		it("will get a date time value, 1970-01-01", () => {
			expect(getPropertyValue(instance, properties.dateTimeMissingProperty)).toEqual('1970-01-01');
		});
	});
	describe("getPropertyByCode", () => {
		it("will return a property by the specified code", () => {
			let properties = [
				Object.assign({}, baseProperty, {
					"code": "string_value",
					"dataType": "STRG",
					"sourceField": "String Value"
				})
			];
			let code = "string_value";
			let result = getPropertyByCode(code, properties);
			expect(result).toBe(properties[0]);
		});
		it("will return a null if no property found", () => {
			let properties = [];
			let code = "string_value";
			let result = getPropertyByCode(code, properties);
			expect(result).toBeNull();
		});
	});
	describe("getPropertyValueByCode", () => {
		let instance = {
			"String Value": "test"
		};
		it("will return a property value by the specified code", () => {
			let properties = [
				Object.assign({}, baseProperty, {
					"code": "string_value",
					"dataType": "STRG",
					"sourceField": "String Value"
				})
			];
			let code = "string_value";
			let result = getPropertyValueByCode(instance, code, properties);
			expect(result).toEqual("test");
		});
		it("will return an empty string if no property found", () => {
			let properties = [];
			let code = "string_value";
			let result = getPropertyValueByCode(instance, code, properties);
			expect(result).toEqual("");
		});
		it("will return a null if no property found and null allowed", () => {
			let properties = [];
			let code = "string_value";
			let result = getPropertyValueByCode(instance, code, properties, true);
			expect(result).toBeNull();
		});
	});
	describe("processValueCollection", () => {
		let rows = [{
			Date: 42370,
			'Fund Code': 'Fund1',
			Type: 'Allocation 1',
			Label: 'Company 1',
			Value: 50,
			Sector: 'Industrial',
			Periodicitiy: 'Monthly'
		}];
		let allocationLabelValueProperties = [
			{
				"code": "allocation_1",
				"entityType": "CLSS",
				"label": "Allocation 1",
				"description": "Allocation 1 Description",
				"group": "core",
				"extended": [
					{
						"label": "sector",
						"dataType": "STRG"
					}
				],
				"cardinality": "1"
			}
		];
		let allocationMapping = <IMapping[]>[
			{
				"type": "allocation_1",
				"mappings": [
					{
						"code": "client_code",
						"dataType": "STRG",
						"sourceField": "Fund Code"
					},
					{
						"code": "date",
						"dataType": "DATE",
						"sourceField": "Date"
					},
					{
						"code": "type",
						"dataType": "STRG",
						"sourceField": "Type"
					},
					{
						"code": "label",
						"dataType": "STRG",
						"sourceField": "Label"
					},
					{
						"code": "value",
						"dataType": "DCML",
						"sourceField": "Value"
					},
					{
						"code": "sector",
						"dataType": "STRG",
						"sourceField": "Sector"
					},
					{
						"code": "periodicity",
						"dataType": "STRG",
						"sourceField": "Periodicitiy"
					}
				]
			}
		];
		let allocationResult = [{
			entityType: 'CLSS',
			clientCode: 'Fund1',
			code: 'allocation_1',
			ccy: 'N/A',
			values: [{ value: 50, label: 'Company 1', sector: 'Industrial' }]
		}];
		let dateAllocationResult = [{
			entityType: 'CLSS',
			clientCode: 'Fund1',
			code: 'allocation_1',
			ccy: 'N/A',
			periodicity: 'MONTHLY',
			classification: 'N/A',
			values: [{ value: 50, date: '2016-01-01', sector: 'Industrial' }]
		}];
		it("will process the allocation value collection when passed some rows", () => {
			let result = processValueCollection("allocation_1", rows, allocationLabelValueProperties, allocationMapping);
			expect(result).toEqual(allocationResult);
		});
		it("will process the date allocation value collection when passed some rows", () => {
			let result = processValueCollection("allocation_1", rows, allocationLabelValueProperties, allocationMapping, false);
			expect(result).toEqual(dateAllocationResult);
		});
	});
	describe("getPeriodicityValue", () => {
		let possibleValues = {
			"DAILY": ["1", "d", "day", "daily", "dly"],
			"WEEKLY": ["7", "w", "week", "weekly", "wkly"],
			"MONTHLY": ["30", "m", "month", "monthly", "mnthly"],
			"QUARTERLY": ["90", "q", "quarter", "quarterly", "qrtrly"],
			"ANNUALLY": ["365", "y", "year", "yearly", "yrly"]
		};
		for (let key of Object.keys(possibleValues)) {
			for (let value of possibleValues[key]) {
				it(`will return key of ${key} for ${value}`, () => {
					let result = getPeriodicityValue(value);
					expect(result).toEqual(key);
				});
			}
		}
		it('will return the default value of MONTHLY for an unknown key', () => {
			let result = getPeriodicityValue("TEST");
			expect(result).toEqual("MONTHLY");
		});
	});
	describe("processFundListCollection", () => {
		let fundlistRows = [];
		let fundlistMappings = [];
		let commentaryTypes = [];
		beforeEach(() => {
			fundlistRows = [
				{
					"Type": "fundlist_1",
					"Suffix": "UK",
					"Client Code": "Isin1"
				},
				{
					"Type": "fundlist_1",
					"Suffix": "UK",
					"Client Code": "Isin2"
				},
				{
					"Type": "fundlist_1",
					"Suffix": "US",
					"Client Code": "Isin3"
				},
				{
					"Type": "fundlist_1",
					"Suffix": "US",
					"Client Code": "Isin4"
				}
			];
			fundlistMappings = [
				{
					"type": "fundlist_1",
					"mappings": [
						{
							"code": "type",
							"dataType": "STRG",
							"sourceField": "Type"
						},
						{
							"code": "list_name",
							"dataType": "STRG",
							"sourceField": "{Type}_{Suffix}"
						},
						{
							"code": "client_code",
							"dataType": "STRG",
							"sourceField": "Client Code"
						}
					]
				}
			]
		});
		it("will return an empty array if no data is passed to it", () => {
			let result = processFundListCollection('fundlist_1', [], fundlistMappings);
			expect(result).toEqual([]);
		});
		it("will return a fund list record", () => {
			let result = processFundListCollection('fundlist_1', fundlistRows, fundlistMappings);
			expect(result).toEqual([
				{ listName: 'fundlist_1_UK', funds: [ 'Isin1', 'Isin2' ] },
				{ listName: 'fundlist_1_US', funds: [ 'Isin3', 'Isin4' ] }
			]);
		});
	});
	describe("processCommentaryCollection", () => {
		let commentaryRows = [];
		let commentaryMappings = [];
		let commentaryTypes = [];
		beforeEach(() => {
			commentaryTypes = [
				{
					"commentaryType": "Fund Overview",
					"description": "Fund Overview"
				}
			];
			commentaryRows = [
				{
					"Fund Code": "Fund1",
					"Commentary Type": "Fund Overview",
					"Culture": "en-GB",
					"Commentary": "This is the en-GB Fund Overview Commentary1"
				},
				{
					"Fund Code": "Fund1",
					"Commentary Type": "Fund Overview",
					"Culture": "en-GB",
					"Commentary": "This is the en-GB Fund Overview Commentary"
				}
			];
			commentaryMappings = [
				{
					"type": "commentary_1",
					"mappings": [
						{
							"code": "client_code",
							"dataType": "STRG",
							"sourceField": "Fund Code"
						},
						{
							"code": "commentary_type",
							"dataType": "STRG",
							"sourceField": "Commentary Type"
						},
						{
							"code": "culture",
							"dataType": "STRG",
							"sourceField": "Culture"
						},
						{
							"code": "commentary",
							"dataType": "STRG",
							"sourceField": "Commentary"
						}
					]
				}
			]
		});
		it("will return an empty array if no data is passed to it", () => {
			let result = processCommentaryCollection('commentary_1', [], commentaryTypes, commentaryMappings);
			expect(result).toEqual([]);
		});
		it("will return a commentary record", () => {
			let result = processCommentaryCollection('commentary_1', commentaryRows, commentaryTypes, commentaryMappings);
			expect(result).toEqual([
				{
					commentaryType: 'Fund Overview',
					linkedEntity: 'Fund1',
					commentaries: [
						{ culture: 'en-GB', commentary: 'This is the en-GB Fund Overview Commentary' }
					]
				}
			]);
		});
	});
	describe("processDisclaimerCollection", () => {
		let disclaimerRows = [];
		let disclaimerMappings = [];
		let disclaimerTypes = [];
		beforeEach(() => {
			disclaimerTypes = [
				{
					"disclaimerType": "Performance",
					"description": "Performance"
				}
			];
			disclaimerRows = [
				{
					"Fund Code": "Fund1",
					"Disclaimer Type": "Performance",
					"Culture": "en-GB",
					"Disclaimer": "This is the en-GB Performance Disclaimer 1"
				},
				{
					"Fund Code": "Fund1",
					"Disclaimer Type": "Performance",
					"Culture": "en-GB",
					"Disclaimer": "This is the en-GB Performance Disclaimer"
				}
			];
			disclaimerMappings = [
				{
					"type": "disclaimer_1",
					"mappings": [
						{
							"code": "client_code",
							"dataType": "STRG",
							"sourceField": "Fund Code"
						},
						{
							"code": "disclaimer_type",
							"dataType": "STRG",
							"sourceField": "Disclaimer Type"
						},
						{
							"code": "culture",
							"dataType": "STRG",
							"sourceField": "Culture"
						},
						{
							"code": "disclaimer",
							"dataType": "STRG",
							"sourceField": "Disclaimer"
						}
					]
				}
			]
		});
		it("will return an empty array if no data is passed to it", () => {
			let result = processDisclaimerCollection('disclaimer_1', [], disclaimerTypes, disclaimerMappings);
			expect(result).toEqual([]);
		});
		it("will return a disclaimer record", () => {
			let result = processDisclaimerCollection('disclaimer_1', disclaimerRows, disclaimerTypes, disclaimerMappings);
			expect(result).toEqual([
				{
					disclaimerType: 'Performance',
					linkedEntity: 'Fund1',
					disclaimers: [
						{ culture: 'en-GB', disclaimer: 'This is the en-GB Performance Disclaimer' }
					]
				}
			]);
		});
	});
	describe("processTranslationCollection", () => {
		let translationRows = [];
		let translationMappings = [];
		beforeEach(() => {
			translationRows = [
				{
					"Culture": "en-GB",
					"Phrase": "Example",
					"Translation Culture": "fr-FR",
					"Translation": "Exemple"
				}
			];
			translationMappings = [
				{
					"type": "translation_1",
					"mappings": [
						{
							"code": "culture",
							"dataType": "STRG",
							"sourceField": "Culture"
						},
						{
							"code": "phrase",
							"dataType": "STRG",
							"sourceField": "Phrase"
						},
						{
							"code": "translation_culture",
							"dataType": "STRG",
							"sourceField": "Translation Culture"
						},
						{
							"code": "translation",
							"dataType": "STRG",
							"sourceField": "Translation"
						}
					]
				}
			]
		});
		it("will return an empty array if no data is passed to it", () => {
			let result = processTranslationCollection('translation_1', [], translationMappings);
			expect(result).toEqual([]);
		});
		it("will return a translation record", () => {
			let result = processTranslationCollection('translation_1', translationRows, translationMappings);
			expect(result).toEqual([{ culture: 'en-GB', phrase: 'Example', translationCulture: 'fr-FR', translation: 'Exemple' }]);
		});
	});
	describe("processDocumentCollection", () => {
		describe("handling linked documents", () => {
			let documentMetaProperties = [];
			let documentMappings = [];
			let documentRows = [];
			beforeEach(() => {
				documentMetaProperties = [
					{
						"code": "document_type",
						"dataType": "STRG",
						"validationRule": "NONE",
						"label": "document type",
						"description": "document type",
						"group": "core"
					}
				];
				documentMappings = [
					{
						"type": "document_1",
						"mappings": [
							{
								"code": "client_code",
								"dataType": "STRG",
								"sourceField": "{ISIN}-{Document Type}-{Culture}"
							},
							{
								"code": "culture_code",
								"dataType": "STRG",
								"sourceField": "Culture"
							},
							{
								"code": "title",
								"dataType": "STRG",
								"sourceField": "Title"
							},
							{
								"code": "path",
								"dataType": "STRG",
								"sourceField": "Path"
							},
							{
								"code": "document_type",
								"dataType": "STRG",
								"sourceField": "Document Type"
							}
						]
					}
				];
				documentRows = [{
					ISIN: 'Isin1',
					Title: 'Kurtosys Benefits',
					Culture: 'en-GB',
					'Document Type': 'Marketing',
					Path: 'https://www.kurtosys.com/wp-content/uploads/10_Ways_Asset_Managers_benefit_using_Kurtosys.pdf'
				}];
			});
			it("will return an empty array when no rows are passed", () => {
				let result = processLinkedDocumentCollection('document_1', [], documentMetaProperties, documentMappings);
				expect(result).toEqual([]);
			});
			it("will return an empty array when no rows are passed", () => {
				let result = processLinkedDocumentCollection('document_1', documentRows, documentMetaProperties, documentMappings);
				expect(result).toEqual([
					{
						clientCode: 'Isin1-Marketing-en-GB',
						cultureCode: 'en-GB',
						title: 'Kurtosys Benefits',
						path: 'https://www.kurtosys.com/wp-content/uploads/10_Ways_Asset_Managers_benefit_using_Kurtosys.pdf',
						meta: {
							document_type: {
								value: ['Marketing']
							}
						}
					}
				]);
			});
		});
	})
});