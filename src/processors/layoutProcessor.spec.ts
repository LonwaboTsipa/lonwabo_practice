import {
	getKeyFromInstance,
	getTagFromInstance,
	getKeyFromTagObject,
	getTagFromKey,
	addLayoutConfigurationForKey,
	getLayoutConfigurationTemplate,
	getPredefinedLayoutTemplates,
	addLayoutConfigurationsForCurrentAndParents,
	mergeMissingTemplateComponents
} from "./layoutProcessor";

describe('src/processors/layoutProcessor.ts', () => {
	let layoutConfigurationType;
	let layoutConfigurationTypeTemplate;
	beforeEach(() => {
		layoutConfigurationType = {
			type: "page_layout",
			tags: [
				{ key: 'fund_id', selector: 'shareClass.properties_pub.fund_id.value', order: 1 },
				{ key: 'isin', selector: 'shareClass.clientCode', order: 2 }
			],
			componentCodes: ["factsheet"]
		};
		layoutConfigurationTypeTemplate = {
			template: "root"
		};
	});
	describe("getKeyFromInstance", () => {
		it("will return a valid key with both values missing", async () => {
			const options = {};
			let response = getKeyFromInstance(layoutConfigurationType, options);
			expect(response).toEqual('fund_id-isin');
		});
		it("will return a valid key with one value missing", async () => {
			const options = {
				shareClass: {
					clientCode: "LU123456789"
				}
			};
			let response = getKeyFromInstance(layoutConfigurationType, options);
			expect(response).toEqual('fund_id-LU123456789');
		});
		it("will return a valid key with all keys available", async () => {
			const options = {
				shareClass: {
					clientCode: "LU123456789",
					properties_pub: {
						fund_id: { value: "fund1" }
					}
				}
			};
			let response = getKeyFromInstance(layoutConfigurationType, options);
			expect(response).toEqual('fund1-LU123456789');
		});
		const layoutConfigurationTypeIncorrectOrder = {
			type: "page_layout",
			tags: [
				{ key: 'isin', selector: 'shareClass.clientCode', order: 2 },
				{ key: 'fund_id', selector: 'shareClass.properties_pub.fund_id.value', order: 1 },
			],
			componentCodes: ["factsheet"]
		};
		it("will return a valid key with both values missing and sort the tags", async () => {
			const options = {};
			let response = getKeyFromInstance(layoutConfigurationTypeIncorrectOrder, options);
			expect(response).toEqual('fund_id-isin');
		});

	});
	describe("getTagFromInstance", () => {
		it("will return an empty tag from empty options", async () => {
			const options = {};
			let response = getTagFromInstance(layoutConfigurationType, options);
			expect(response).toEqual({});
		});
		it("will return a tag with only the values found", async () => {
			const options = {
				shareClass: {
					clientCode: "LU123456789"
				}
			};
			let response = getTagFromInstance(layoutConfigurationType, options);
			expect(response).toEqual({ isin: "LU123456789" });
		});
		it("will return a tag with everything loaded in it", async () => {
			const options = {
				shareClass: {
					clientCode: "LU123456789",
					properties_pub: {
						fund_id: { value: "fund1" }
					}
				}
			};
			let response = getTagFromInstance(layoutConfigurationType, options);
			expect(response).toEqual({ isin: "LU123456789", fund_id: "fund1" });
		});
	});
	describe("getKeyFromTagObject", () => {
		it("will return a key from the tag object: uses keys because of blank tag object", async () => {
			const tag = {};
			let response = getKeyFromTagObject(layoutConfigurationType, tag);
			expect(response).toEqual("fund_id-isin");
		});
		it("will return a key from the tag object: only values found", async () => {
			const tag = {
				isin: "LU123456789"
			};
			let response = getKeyFromTagObject(layoutConfigurationType, tag);
			expect(response).toEqual("fund_id-LU123456789");
		});
		it("will return a key from the tag object: only values found", async () => {
			const tag = {
				isin: "LU123456789",
				fund_id: "fund1"
			};
			let response = getKeyFromTagObject(layoutConfigurationType, tag);
			expect(response).toEqual("fund1-LU123456789");
		});
	});
	describe("getTagFromKey", () => {
		it("will return a key from the tag object: uses keys because of blank tag object", async () => {
			const tag = {};
			let response = getTagFromKey(layoutConfigurationType, "fund_id-isin");
			expect(response).toEqual({});
		});
		it("will return a key from the tag object: only values found", async () => {
			let response = getTagFromKey(layoutConfigurationType, "fund_id-LU123456789");
			expect(response).toEqual({
				isin: "LU123456789"
			});
		});
		it("will return a key from the tag object: all values in the layout configuration type", async () => {
			const tag = {
				isin: "LU123456789",
				fund_id: "fund1"
			};
			let response = getKeyFromTagObject(layoutConfigurationType, tag);
			expect(response).toEqual("fund1-LU123456789");
		});
	});
	describe("addLayoutConfigurationForKey", () => {

		xit("will return a tag with everything loaded in it", async () => {
			const options = {
				shareClass: {
					clientCode: "LU123456789",
					properties_pub: {
						fund_id: { value: "fund1" }
					}
				}
			};
			let response = getTagFromInstance(layoutConfigurationType, options);
			expect(response).toEqual({ isin: "LU123456789", fund_id: "fund1" });
		});
	});
	describe("getLayoutConfigurationTemplate", () => {
		let fundTemplate = {
			template: "fund1-isin"
		};
		let shareClassTemplate = {
			template: "fund1-LU123456789"
		};
		it("will return a template for the share class", async () => {
			let key = "fund1-LU123456789";
			let predefinedLayoutTemplates = {
				"fund1-LU123456789": shareClassTemplate,
				"fund1-isin": fundTemplate
			};
			let response = getLayoutConfigurationTemplate(layoutConfigurationType, key, predefinedLayoutTemplates, layoutConfigurationTypeTemplate);
			expect(response).toEqual(shareClassTemplate);
		});
		it("will return a template for the fund, no share class template found", async () => {
			let key = "fund1-LU123456789";
			let predefinedLayoutTemplates = {
				"fund1-isin": fundTemplate
			};
			let response = getLayoutConfigurationTemplate(layoutConfigurationType, key, predefinedLayoutTemplates, layoutConfigurationTypeTemplate);
			expect(response).toEqual(fundTemplate);
		});
		it("will return the root template for no possible template found", async () => {
			let key = "fund1-LU123456789";
			let predefinedLayoutTemplates = {
				"fund2-isin": { template: "Just any other template to validate it doesnt fall back to an invalid one" }
			};
			let response = getLayoutConfigurationTemplate(layoutConfigurationType, key, predefinedLayoutTemplates, layoutConfigurationTypeTemplate);
			expect(response).toEqual(layoutConfigurationTypeTemplate);
		});
	});
	describe("addLayoutConfigurationForKey", () => {
		let fundTemplate = {
			template: "fund1-isin"
		};
		let shareClassTemplate = {
			template: "fund1-LU123456789"
		};
		it("will add the layout configuration for the key, share class version", async () => {
			let key = "fund1-LU123456789";
			let predefinedLayoutTemplates = {
				"fund1-LU123456789": shareClassTemplate,
				"fund1-isin": fundTemplate
			};
			let hashObj = {};
			let response = addLayoutConfigurationForKey(layoutConfigurationType, key, predefinedLayoutTemplates, hashObj, layoutConfigurationTypeTemplate);
			let expectedResult = { "fund1-LU123456789": { "configuration": { "template": "fund1-LU123456789" }, "isNew": true, "layoutConfigurationType": "page_layout", "tags": { "fund_id": "fund1", "isin": "LU123456789" } } }​​;
			expect(hashObj).toEqual(expect.objectContaining(expectedResult));
		});
		it("will add the layout configuration for the key, fund version", async () => {
			let key = "fund1-LU123456789";
			let predefinedLayoutTemplates = {
				"fund1-isin": fundTemplate
			};
			let hashObj = {};
			let response = addLayoutConfigurationForKey(layoutConfigurationType, key, predefinedLayoutTemplates, hashObj, layoutConfigurationTypeTemplate);
			let expectedResult = { "fund1-LU123456789": { "configuration": { "template": "fund1-isin" }, "isNew": true, "layoutConfigurationType": "page_layout", "tags": { "fund_id": "fund1", "isin": "LU123456789" } } }​​;
			expect(hashObj).toEqual(expect.objectContaining(expectedResult));
		});
		it("will add nothing because no template is found", async () => {
			let key = "fund1-LU123456789";
			let predefinedLayoutTemplates = {

			};
			let hashObj = {};
			let response = addLayoutConfigurationForKey(layoutConfigurationType, key, predefinedLayoutTemplates, hashObj, layoutConfigurationTypeTemplate);
			let expectedResult = { "fund1-LU123456789": { "configuration": { "template": "root" }, "isNew": true, "layoutConfigurationType": "page_layout", "tags": { "fund_id": "fund1", "isin": "LU123456789" } } }​​;
			expect(hashObj).toEqual(expect.objectContaining(expectedResult));
		});
	});
	describe("addLayoutConfigurationsForCurrentAndParents", () => {
		let fundTemplate = {
			template: "fund1-isin"
		};
		let shareClassTemplate = {
			template: "fund1-LU123456789"
		};
		it("will add the layout configurations for the share class and the parents: all found", async () => {
			const options = {
				shareClass: {
					clientCode: "LU123456789",
					properties_pub: {
						fund_id: { value: "fund1" }
					}
				}
			};
			let predefinedLayoutTemplates = {
				"fund1-LU123456789": shareClassTemplate,
				"fund1-isin": fundTemplate
			};
			let hashObj = {};
			let response = addLayoutConfigurationsForCurrentAndParents(layoutConfigurationType, options, predefinedLayoutTemplates, hashObj, layoutConfigurationTypeTemplate);
			let expectedResult = {
				"fund1-LU123456789": { "configuration": { "template": "fund1-LU123456789" }, "isNew": true, "layoutConfigurationType": "page_layout", "tags": { "fund_id": "fund1", "isin": "LU123456789" } },
				"fund1-isin": { "configuration": { "template": "fund1-isin" }, "isNew": true, "layoutConfigurationType": "page_layout", "tags": { "fund_id": "fund1" } }
			};
			expect(hashObj).toEqual(expect.objectContaining(expectedResult));
		});
		it("will add the layout configurations for the share class and the parents: only fund level found", async () => {
			const options = {
				shareClass: {
					clientCode: "LU123456789",
					properties_pub: {
						fund_id: { value: "fund1" }
					}
				}
			};
			let predefinedLayoutTemplates = {
				"fund1-isin": fundTemplate
			};
			let hashObj = {};
			let response = addLayoutConfigurationsForCurrentAndParents(layoutConfigurationType, options, predefinedLayoutTemplates, hashObj, layoutConfigurationTypeTemplate);
			let expectedResult = {
				"fund1-LU123456789": { "configuration": { "template": "fund1-isin" }, "isNew": true, "layoutConfigurationType": "page_layout", "tags": { "fund_id": "fund1", "isin": "LU123456789" } },
				"fund1-isin": { "configuration": { "template": "fund1-isin" }, "isNew": true, "layoutConfigurationType": "page_layout", "tags": { "fund_id": "fund1" } }
			};
			expect(hashObj).toEqual(expect.objectContaining(expectedResult));
		});
		it("will add the layout configurations for the share class and the parents: no existing templates found", async () => {
			const options = {
				shareClass: {
					clientCode: "LU123456789",
					properties_pub: {
						fund_id: { value: "fund1" }
					}
				}
			};
			let predefinedLayoutTemplates = {

			};
			let hashObj = {};
			let response = addLayoutConfigurationsForCurrentAndParents(layoutConfigurationType, options, predefinedLayoutTemplates, hashObj, layoutConfigurationTypeTemplate);
			let expectedResult = {
				"fund1-LU123456789": { "configuration": { "template": "root" }, "isNew": true, "layoutConfigurationType": "page_layout", "tags": { "fund_id": "fund1", "isin": "LU123456789" } },
				"fund1-isin": { "configuration": { "template": "root" }, "isNew": true, "layoutConfigurationType": "page_layout", "tags": { "fund_id": "fund1" } }
			};
			expect(hashObj).toEqual(expect.objectContaining(expectedResult));
		});
	});
	describe("getPredefinedLayoutTemplates", () => {
		it("will return a template for the share class", async () => {
			let response = getPredefinedLayoutTemplates(layoutConfigurationType);
			expect(response).toBeDefined();
		});
	});
	describe("mergeMissingTemplateComponents", () => {
		it("will merge missing elements: no change", async () => {
			let layout = {
				factsheet: {
					"elementProperties": {
						"key": "element1",
						"label": "Element 1",
						"visible": true
					},
					elements: []
				}
			};
			let template = {
				factsheet: {
					"elementProperties": {
						"key": "element1",
						"label": "Element 1",
						"visible": true
					},
					elements: []
				}
			};
			let response = mergeMissingTemplateComponents(layout, template);
			let expectedResult = template;
			expect(response).toEqual(false);
		});
		it("will merge missing elements: root key change", async () => {
			let layout = {
				
			};
			let template = {
				factsheet: {
					"elementProperties": {
						"key": "element1",
						"label": "Element 1",
						"visible": true
					},
					elements: []
				}
			};
			let response = mergeMissingTemplateComponents(layout, template);
			let expectedLayout = template;
			expect(response).toEqual(true);
			expect(layout).toEqual(expectedLayout);
		});
		it("will merge missing elements: add child", async () => {
			let layout = {
				factsheet: {
					"elementProperties": {
						"key": "element1",
						"label": "Element 1",
						"visible": true
					},
					elements: []
				}
			};
			let template = {
				factsheet: {
					"elementProperties": {
						"key": "element1",
						"label": "Element 1",
						"visible": true
					},
					elements: [
						{
							"elementProperties": {
								"key": "child element1",
								"label": "Child Element 1",
								"visible": true
							},
							elements: []
						}
					]
				}
			};
			let response = mergeMissingTemplateComponents(layout, template);
			let expectedLayout = {
				factsheet: {
					"elementProperties": {
						"key": "element1",
						"label": "Element 1",
						"visible": true
					},
					elements: [
						{
							"elementProperties": {
								"key": "child element1",
								"label": "Child Element 1",
								"visible": true
							},
							elements: []
						}
					]
				}
			};
			expect(response).toEqual(true);
			expect(layout).toEqual(expectedLayout);
		});
		it("will merge missing elements: remove child", async () => {
			let layout = {
				factsheet: {
					"elementProperties": {
						"key": "element1",
						"label": "Element 1",
						"visible": true
					},
					elements: [
						{
							"elementProperties": {
								"key": "child element1",
								"label": "Child Element 1",
								"visible": true
							},
							elements: []
						}
					]
				}
			};
			let template = {
				factsheet: {
					"elementProperties": {
						"key": "element1",
						"label": "Element 1",
						"visible": true
					},
					elements: []
				}
			};
			let response = mergeMissingTemplateComponents(layout, template);
			let expectedLayout = {
				factsheet: {
					"elementProperties": {
						"key": "element1",
						"label": "Element 1",
						"visible": true
					},
					elements: []
				}
			};
			expect(response).toEqual(true);
			expect(layout).toEqual(expectedLayout);
		});
		it("will merge missing elements: label change", async () => {
			let layout = {
				factsheet: {
					"elementProperties": {
						"key": "element1",
						"label": "Element 1",
						"visible": true
					},
					elements: []
				}
			};
			let template = {
				factsheet: {
					"elementProperties": {
						"key": "element1",
						"label": "Element One",
						"visible": true
					},
					elements: []
				}
			};
			let response = mergeMissingTemplateComponents(layout, template);
			let expectedLayout = {
				factsheet: {
					"elementProperties": {
						"key": "element1",
						"label": "Element One",
						"visible": true
					},
					elements: []
				}
			};
			expect(response).toEqual(true);
			expect(layout).toEqual(expectedLayout);
		});
		it("will merge missing elements: nested label change", async () => {
			let layout = {
				factsheet: {
					"elementProperties": {
						"key": "element1",
						"label": "Element 1",
						"visible": true
					},
					elements: [
						{
							"elementProperties": {
								"key": "childElement1",
								"label": "Child Element 1",
								"visible": true
							}
						}
					]
				}
			};
			let template = {
				factsheet: {
					"elementProperties": {
						"key": "element1",
						"label": "Element 1",
						"visible": true
					},
					elements: [
						{
							"elementProperties": {
								"key": "childElement1",
								"label": "Child Element One",
								"visible": true
							}
						}
					]
				}
			};
			let response = mergeMissingTemplateComponents(layout, template);
			let expectedLayout = {
				factsheet: {
					"elementProperties": {
						"key": "element1",
						"label": "Element 1",
						"visible": true
					},
					elements: [
						{
							"elementProperties": {
								"key": "childElement1",
								"label": "Child Element One",
								"visible": true
							}
						}
					]

				}
			};
			expect(response).toEqual(true);
			expect(layout).toEqual(expectedLayout);
		});
	});

});