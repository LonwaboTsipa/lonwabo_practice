import {isNullOrUndefined, isUndefined, deepCopy} from "./any";

describe("any", () => {
	describe("isNullOrUndefined", () => {
		it("will check if the value is null or undefined", () => {
			expect(isNullOrUndefined(null)).toBe(true);
			expect(isNullOrUndefined(undefined)).toBe(true);
		});

		it("will return false if the value is defined", () => {
			expect(isNullOrUndefined({})).toBe(false);
			expect(isNullOrUndefined(false)).toBe(false);
			expect(isNullOrUndefined(true)).toBe(false);
			expect(isNullOrUndefined(0)).toBe(false);
			expect(isNullOrUndefined(1)).toBe(false);
			expect(isNullOrUndefined(NaN)).toBe(false);
		});
	});
	describe("isUndefined", () => {
		let testObj = {
			value: 1
		};
		it("will return true if the value passed is undefined", () => {
			expect(isUndefined(undefined)).toBe(true);
			expect(isUndefined(testObj["testAttr"])).toBe(true);
		});
		it("will return false if the value passed is not undefined", () => {
			expect(isUndefined("")).toBe(false);
			expect(isUndefined(1)).toBe(false);
			expect(isUndefined(testObj)).toBe(false);
			expect(isUndefined(testObj.value)).toBe(false);
		});
	});
	describe("deepCopy", () => {
		let testObj = {
			value: 1
		};
		it("will return null if value is undefined", () => {
			expect(deepCopy()).toBe(null);			
		});
		it("will return a copy of a primitive", () => {
			expect(deepCopy("test")).toBe("test");
			expect(deepCopy(1)).toBe(1);
			expect(deepCopy(null)).toBe(null);
		});
		it("will return a copy of an object", () => {
			let source = {"test": true};			
			expect(deepCopy(source)).toEqual(source);
			expect(deepCopy(source)).not.toBe(source);			
		});
		it("will return a copy of a complex object", () => {
			let source = { "child": { "value": true} };
			let response = deepCopy(source);			 			
			expect(response).toEqual(source);			
			expect(response).not.toBe(source);
			expect(response['child']).toEqual(source['child']);			
			expect(response['child']).not.toBe(source['child']);			
		});
		it("will return a copy of an array", () => {
			let source = [{ "value": true}];
			let response = deepCopy(source);			 			
			expect(response).toEqual(source);			
			expect(response).not.toBe(source);
			expect(response[0]).toEqual(source[0]);			
			expect(response[0]).not.toBe(source[0]);			
		});
		it("will skip on a functions", () => {
			let source = { fn: (e) => e	};
			let response = deepCopy(source);			
			expect(response).toEqual({});	
		});

	});
});