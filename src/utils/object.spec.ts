import { getValueFromStringNotation, getInnerParameters, getValueFromDotNotation, applyModifier } from './object';

describe("object", () => {
	describe("getValueFromStringNotation", () => {
		let instance = {};
		beforeEach(() => {
			instance = {
				name: "username",
				salary: 2,
				department: {
					name: "departmentName"
				}
			};
		})
		it("will return null for an unfound parameter", () => {
			let stringNotation = "undefinedProperty";
			let result = getValueFromStringNotation(stringNotation, instance, null);
			expect(result).toBeNull();
		});
		it("will return a single value", () => {
			let stringNotation = "name";
			let result = getValueFromStringNotation(stringNotation, instance, null);
			expect(result).toEqual("username");
		});
		it("will return a single value (nested)", () => {
			let stringNotation = "department.name";
			let result = getValueFromStringNotation(stringNotation, instance, null);
			expect(result).toEqual("departmentName");
		});
		it("will return a single value wrapped as a parameter", () => {
			let stringNotation = "{name}";
			let result = getValueFromStringNotation(stringNotation, instance, null);
			expect(result).toEqual("username");
		});
		it("will return a single value (nested) wrapped as a parameter", () => {
			let stringNotation = "{department.name}";
			let result = getValueFromStringNotation(stringNotation, instance, null);
			expect(result).toEqual("departmentName");
		});
		it("will return a literal value from a parameter", () => {
			let stringNotation = "${salary}";
			let result = getValueFromStringNotation(stringNotation, instance, null);
			expect(result).toEqual("$2");
		});	
		it("will return a literal value from multiple parameters", () => {
			let stringNotation = "{name}-{department.name}";
			let result = getValueFromStringNotation(stringNotation, instance, null);
			expect(result).toEqual("username-departmentName");
		});	
		it("will return a literal value from multiple parameters with modifiers", () => {
			let stringNotation = "{name:U}-{department.name:L}";
			let result = getValueFromStringNotation(stringNotation, instance, null);
			expect(result).toEqual("USERNAME-departmentname");
		});	
		it("will return a single value wrapped as a parameter with an invalid modifier applied", () => {
			let stringNotation = "{name:}";
			let result = getValueFromStringNotation(stringNotation, instance, null);
			expect(result).toEqual("username");
		});	
		it("will return a single value wrapped as a parameter with a modifier applied", () => {
			let stringNotation = "{name:U}";
			let result = getValueFromStringNotation(stringNotation, instance, null);
			expect(result).toEqual("USERNAME");
		});	
	});
	describe("getInnerParameters", () => {
		it("will return an empty array when no parameters found", () => {
			let response = getInnerParameters("");
			expect(response).toEqual([]);
		});
		it("will throw an exception if there are nested parameters", () => {
			expect(() => getInnerParameters("{parameter1{parameter2}}")).toThrow();			
		});
		it("will throw an exception if no opening tag found", () => {
			expect(() => getInnerParameters("parameter1}")).toThrow();	
		});
		it("will throw an exception if no opening tag found", () => {
			expect(() => getInnerParameters("{parameter1")).toThrow();			
		});
		it("will return a single parameter", () => {
			let response = getInnerParameters("{parameter1}-a");
			expect(response).toEqual(['parameter1']);
		});
		it("will return multiple parameters", () => {
			let response = getInnerParameters("{parameter1}-{parameter2}");
			expect(response).toEqual(['parameter1', 'parameter2']);
		});
	});
	describe("applyModifier", () => {
		it("will return the value if the modifier is invalid", () => {
			let result = applyModifier("test", []);
			expect(result).toEqual("test");
		});
		it("will return the value if the value is null or undefined", () => {
			let result = applyModifier(null, []);
			expect(result).toBeNull();
			result = applyModifier(undefined, []);
			expect(result).toBeUndefined();
		});
		it("will return the value if the value is an object", () => {
			let value = {};
			let result = applyModifier(value, []);
			expect(result).toBe(value);			
		});
		it("will return the value uppercased", () => {
			let value = "test";
			let result = applyModifier(value, ["U"]);
			expect(result).toEqual("TEST");			
		});
		it("will return the value lowercased", () => {
			let value = "TEST";
			let result = applyModifier(value, ["L"]);
			expect(result).toEqual("test");			
		});
	});
	describe("getValueFromDotNotation", () => {
		let instance = {
			"name": "testRootName",
			"department": {
				"name": "testDepartmentName",
				"lastModified": {
					"username": "testUsername"
				}
			}
		};
		it("will handle a null sourceField", () => {
			let result = getValueFromDotNotation(null, instance);
			expect(result).toBe(null);
		});
		it("will handle a undefined sourceField", () => {
			let result = getValueFromDotNotation(undefined, instance);
			expect(result).toBe(null);
		});
		it("will handle a null instance", () => {			
			let result = getValueFromDotNotation(null, null);
			expect(result).toBe(null);
		});
		it("will handle a undefined instance", () => {			
			let result = getValueFromDotNotation(null, undefined);
			expect(result).toBe(null);
		});
		it("will handle a undefined sub instance", () => {			
			let result = getValueFromDotNotation("department.invalidSubObject.name", instance);
			expect(result).toBe(null);
		});
		it("will return a root level element", () => {
			let result = getValueFromDotNotation("name", instance);
			expect(result).toBe("testRootName");
		});
		it("will return a second level element", () => {
			let result = getValueFromDotNotation("department.name", instance);
			expect(result).toBe("testDepartmentName");
		});
		it("will return a third level element", () => {
			let result = getValueFromDotNotation("department.lastModified.username", instance);
			expect(result).toBe("testUsername");
		});
	});
});