import {dataLoadingArray} from "@kurtosys/udm_data_toolkit";
import {getProperty, getClientCode, getTimeseriesKey, getStatisticsKey, getAllocationsKey, concatDataToLoad} from "./dataToLoad";

describe("dataToLoad", () => {
	describe("getProperty", () => {
		let item = {
			"clientCode": "testClientCode"
		};
		it("will get property when available", () => {
			let result = getProperty(item, "clientCode");
			expect(result).toEqual("testClientCode");
		});

		it("will get empty string when property not available", () => {
			let result = getProperty(item, "unavailableProperty");
			expect(result).toEqual("");
		});
	});

	describe("getClientCode", () => {
		let item = {
			"clientCode": "testClientCode"
		};
		it("will get clientCode from item when available", () => {
			let result = getClientCode(item);
			expect(result).toEqual("testClientCode");
		});

		it("will get empty string when property not available", () => {
			let result = getClientCode({});
			expect(result).toEqual("");
		});
	});

	describe("getTimeseriesKey", () => {
		it("will get key from item when all available", () => {
			let item = {
				"clientCode": "testClientCode",
				"code": "testCode",
				"ccy": "testCcy",
				"classification": "testClassification",
				"periodicity": "testPeriodicity"
			};
			let result = getTimeseriesKey(item);
			expect(result).toEqual("testClientCode|testCode|testCcy|testClassification|testPeriodicity");
		});

		it("will get key from item when some elements missing", () => {
			let item = {
				"clientCode": "testClientCode",
				"ccy": "testCcy",
				"classification": "testClassification",
				"periodicity": "testPeriodicity"
			};
			let result = getTimeseriesKey(item);
			expect(result).toEqual("testClientCode||testCcy|testClassification|testPeriodicity");
		});

		it("will get key from blank item", () => {
			let item = {};
			let result = getTimeseriesKey(item);
			expect(result).toEqual("||||");
		});
	});

	describe("getStatisticsKey", () => {
		it("will get key from item when all available", () => {
			let item = {
				"clientCode": "testClientCode",
				"code": "testCode",
				"ccy": "testCcy"
			};
			let result = getStatisticsKey(item);
			expect(result).toEqual("testClientCode|testCode|testCcy");
		});

		it("will get key from item when some elements missing", () => {
			let item = {
				"clientCode": "testClientCode",
				"ccy": "testCcy"
			};
			let result = getStatisticsKey(item);
			expect(result).toEqual("testClientCode||testCcy");
		});

		it("will get key from blank item", () => {
			let item = {};
			let result = getStatisticsKey(item);
			expect(result).toEqual("||");
		});
	});

	describe("getAllocationsKey", () => {
		it("will get key from item when all available", () => {
			let item = {
				"clientCode": "testClientCode",
				"code": "testCode",
				"ccy": "testCcy"
			};
			let result = getAllocationsKey(item);
			expect(result).toEqual("testClientCode|testCode|testCcy");
		});

		it("will get key from item when some elements missing", () => {
			let item = {
				"clientCode": "testClientCode",
				"ccy": "testCcy"
			};
			let result = getAllocationsKey(item);
			expect(result).toEqual("testClientCode||testCcy");
		});

		it("will get key from blank item", () => {
			let item = {};
			let result = getAllocationsKey(item);
			expect(result).toEqual("||");
		});
	});

	describe("concatDataToLoad", () => {
		let fund = {
			"clientCode": "testClientCode"
		};
		let shareClass = {
			"clientCode": "testClientCode"
		};
		let genericItem = {
			"clientCode": "testClientCode"
		}
		let globalDataToLoad = new dataLoadingArray();
		it("will not mutate globalDataToLoad variable", () => {
			let newDataToLoad = new dataLoadingArray();
			let result = concatDataToLoad(globalDataToLoad, newDataToLoad);
			expect(result).not.toBe(globalDataToLoad);
		});
		
		function testConcatWithCollectionKey(collectionKey) {
			let newDataToLoad = new dataLoadingArray();
			newDataToLoad[collectionKey] = [genericItem];
			let result = concatDataToLoad(globalDataToLoad, newDataToLoad);
			expect(globalDataToLoad).toBeDefined();
			expect(globalDataToLoad[collectionKey]).toBeDefined();
			expect(globalDataToLoad[collectionKey].length).toEqual(0);
			expect(result).toBeDefined();
			expect(result[collectionKey]).toBeDefined();
			expect(result[collectionKey].length).toEqual(1);
			expect(result[collectionKey][0]).toEqual(genericItem);
		}
		
		function testConcatWithCollectionKeyBlankGlobalCollection(collectionKey) {
			let blankGlobalDataToLoad = new dataLoadingArray();
			blankGlobalDataToLoad[collectionKey] = null;
			let newDataToLoad = new dataLoadingArray();
			newDataToLoad[collectionKey] = [genericItem];
			let result = concatDataToLoad(blankGlobalDataToLoad, newDataToLoad);
			expect(globalDataToLoad).toBeDefined();
			expect(globalDataToLoad[collectionKey]).toBeDefined();
			expect(globalDataToLoad[collectionKey].length).toEqual(0);
			expect(result).toBeDefined();
			expect(result[collectionKey]).toBeDefined();
			expect(result[collectionKey].length).toEqual(1);
			expect(result[collectionKey][0]).toEqual(genericItem);
		}
		
		let collectionKeys = [
			"funds", "classes", "allocations",
			"timeseries", "statistics", "commentary",
			"disclaimers", "fundmanagers", "documents",
			"documentsWithFiles"
		];
		for (let collectionKey of collectionKeys) {
			it(`will return dataToLoad with ${collectionKey} added`, () => {
				testConcatWithCollectionKey(collectionKey);
			});
			it(`will return dataToLoad with ${collectionKey} added, blank global collection`, () => {
				testConcatWithCollectionKeyBlankGlobalCollection(collectionKey);
			});
		}
		
		it("will not add duplicate funds", () => {
			let blankGlobalDataToLoad = new dataLoadingArray();
			blankGlobalDataToLoad.funds.push(fund);
			let newDataToLoad = new dataLoadingArray();
			let result = concatDataToLoad(blankGlobalDataToLoad, newDataToLoad);
			let collectionKey = "funds";
			expect(blankGlobalDataToLoad).toBeDefined();
			expect(blankGlobalDataToLoad[collectionKey]).toBeDefined();
			expect(blankGlobalDataToLoad[collectionKey].length).toEqual(1);
			expect(result).toBeDefined();
			expect(result[collectionKey]).toBeDefined();
			expect(result[collectionKey].length).toEqual(1);
			expect(result[collectionKey][0]).toEqual(genericItem);
		});
				
	});
});
