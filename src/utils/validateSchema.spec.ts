import { validateJSONSchema } from "./";

describe("validateSchema", () => {
	describe("validateJSONSchema", () => {
		let schema = {
			"$schema": "http://json-schema.org/draft-04/schema#",
			"description": "",
			"type": "object",
			"properties": {
				"shareClass": {
					"type": "string",
					"minLength": 1
				},
				"region": {
					"type": "string",
					"minLength": 1
				},
				"performance": {
					"type": "object",
					"properties": {
						"cumulative": {
							"type": "object",
							"properties": {
								"fund1Y": {
									"type": "string",
									"minLength": 1
								},
								"fund3Y": {
									"type": "string",
									"minLength": 1
								}
							},
							"required": [
								"fund3Y",
								"fund1Y"
							]
						},
						"date": {
							"type": "string",
							"minLength": 1
						}
					},
					"required": [
						"cumulative",
						"date"
					]
				},
				"isin": {
					"type": "string",
					"minLength": 1
				}
			},
			"required": [
				"shareClass",
				"region",
				"performance",
				"isin",
			]
		};

		it("will validate the instance with the defined schema", () => {
			let instance = {
				shareClass: "A",
				region: "Africa",
				performance: {
					cumulative: {
						fund1Y: "2.34",
						fund3Y: "4.54"
					},
					date: "23/01/2016"
				},
				isin: "IE0094434FDU"
			};

			let validation = validateJSONSchema(instance, schema);
			expect(validation.errors.length).toEqual(0);
		});

		it("will have errors if the instance does not match the schema", () => {
			let instance = {
				shareClass: "A",
				region: "Africa",
				isin: "IE0094434FDU"
			};

			let validation = validateJSONSchema(instance, schema);
			expect(validation.errors.length).toBeGreaterThan(0);
		});
	});
});