import { safe, getValueFromComplexKeyIdentifier } from './function';

describe("function", () => {
	describe("safe", () => {
		it("will handle type errors", () => {
			expect(() => safe(() => [][0])).not.toThrow();
			expect(() => safe(() => ({}['test']))).not.toThrow();
		});	
		it("will handle reference errors", () => {
			let fn : Function;
			expect(() => safe(() => fn())).not.toThrow();
		});
		it("will not handle general errors", () => {
			let fn = () => { throw new Error("Test"); };
			expect(() => safe(() => fn())).toThrow();
		});		
		it("will return the default", () => {
			let obj = {};
			let defaultValue = {"default": "test"};
			let result = safe(() => obj["key"], defaultValue); 
			expect(result).toBe(defaultValue);
		});		
		it("will return the default", () => {
			let obj = { key: false};
			let defaultValue = true;
			let result = safe(() => obj["key"], defaultValue); 
			expect(result).toBe(false);
		});	
		it("will return null", () => {
			let obj = { key: null };
			let defaultValue = true;
			let result = safe(() => obj["key"], defaultValue); 
			expect(result).toBe(null);
		});		
	});

	describe("getValueFromComplexKeyIdentifier", () => {
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
			let result = getValueFromComplexKeyIdentifier(null, instance);
			expect(result).toBe(null);
		});
		it("will handle a undefined sourceField", () => {
			let result = getValueFromComplexKeyIdentifier(undefined, instance);
			expect(result).toBe(null);
		});
		it("will handle a null instance", () => {			
			let result = getValueFromComplexKeyIdentifier(null, null);
			expect(result).toBe(null);
		});
		it("will handle a undefined instance", () => {			
			let result = getValueFromComplexKeyIdentifier(null, undefined);
			expect(result).toBe(null);
		});
		it("will handle a undefined sub instance", () => {			
			let result = getValueFromComplexKeyIdentifier("department.invalidSubObject.name", instance);
			expect(result).toBe(null);
		});
		it("will return a root level element", () => {
			let result = getValueFromComplexKeyIdentifier("name", instance);
			expect(result).toBe("testRootName");
		});
		it("will return a second level element", () => {
			let result = getValueFromComplexKeyIdentifier("department.name", instance);
			expect(result).toBe("testDepartmentName");
		});
		it("will return a third level element", () => {
			let result = getValueFromComplexKeyIdentifier("department.lastModified.username", instance);
			expect(result).toBe("testUsername");
		});
	});
});