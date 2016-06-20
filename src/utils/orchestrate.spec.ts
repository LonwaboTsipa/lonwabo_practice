import { IManifest } from "@kurtosys/udm_data_toolkit";
import { orchestrateManifestData, orchestrateXlsxData, orchestrateCsvData, orchestrateArrayOfArrays } from './orchestrate';

describe("orchestrate", () => {
	describe("orchestrateManifestData", () => {
		it("will return an array of object assigned by header column for XLSX", () => {
			let rawData = [
				["Header1", "Header2"],
				["Row1 Column1", "Row1 Column2"],
				["Row2 Column1", "Row2 Column2"]
			];
			let manifestItem = <IManifest>{
				key: "excel",
				type: "xlsx",
				description: "xlsx manifest item",
				data: rawData
			};
			
			let expectedResult = [
				{ "Header1": "Row1 Column1", "Header2": "Row1 Column2" },
				{ "Header1": "Row2 Column1", "Header2": "Row2 Column2" }
			];
			expect(orchestrateManifestData(manifestItem)).toEqual(expectedResult);
		});
		it("will return an array of object assigned by header column for CSV", () => {
			let rawData = [
				["Header1", "Header2"],
				["Row1 Column1", "Row1 Column2"],
				["Row2 Column1", "Row2 Column2"]
			];
			let manifestItem = <IManifest>{
				key: "comma",
				type: "csv",
				description: "csv manifest item",
				data: rawData
			};
			
			let expectedResult = [
				{ "Header1": "Row1 Column1", "Header2": "Row1 Column2" },
				{ "Header1": "Row2 Column1", "Header2": "Row2 Column2" }
			];
			expect(orchestrateManifestData(manifestItem)).toEqual(expectedResult);
		})
	})
	describe("orchestrateArrayOfArrays", () => {
		it("will return an array of objects assigned by header columns, clean", () => {
			let rawData = [
				["Header1", "Header2"],
				["Row1 Column1", "Row1 Column2"],
				["Row2 Column1", "Row2 Column2"]
			];
			let expectedResult = [
				{ "Header1": "Row1 Column1", "Header2": "Row1 Column2" },
				{ "Header1": "Row2 Column1", "Header2": "Row2 Column2" }
			];
			expect(orchestrateXlsxData(rawData)).toEqual(expectedResult);
		});
		it("will return an array of objects assigned by header columns, nulls where headers extend past values", () => {
			let rawData = [
				["Header1", "Header2", "Header3"],
				["Row1 Column1", "Row1 Column2", "Row1 Column3"],
				["Row2 Column1", "Row2 Column2"]
			];
			let expectedResult = [
				{ "Header1": "Row1 Column1", "Header2": "Row1 Column2", "Header3": "Row1 Column3" },
				{ "Header1": "Row2 Column1", "Header2": "Row2 Column2", "Header3": null }
			];
			expect(orchestrateXlsxData(rawData)).toEqual(expectedResult);
		});
		it("will return an array of objects assigned by header columns, extra row values excluded", () => {
			let rawData = [
				["Header1", "Header2"],
				["Row1 Column1", "Row1 Column2", "Row1 Column3"],
				["Row2 Column1", "Row2 Column2"]
			];
			let expectedResult = [
				{ "Header1": "Row1 Column1", "Header2": "Row1 Column2" },
				{ "Header1": "Row2 Column1", "Header2": "Row2 Column2" }
			];
			expect(orchestrateXlsxData(rawData)).toEqual(expectedResult);
		});
	});
});