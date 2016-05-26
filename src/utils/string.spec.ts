import {toCode, isNullOrWhitespace, toDayFormat} from "../../src/utils";

describe("string", () => {
	describe("toCode", () => {
		it("will return an empty string if the input is null or undefined", () => {
			expect(toCode(null as any)).toEqual("");
			expect(toCode(undefined as any)).toEqual("");
		});
		
		it("will lowercase a single word", () => {
			expect(toCode("Hello")).toEqual("hello");
			expect(toCode("hEllo")).toEqual("hello");			
		});
		
		it("will trim whitespace", () => {
			expect(toCode("hello ")).toEqual("hello");
			expect(toCode(" hello")).toEqual("hello");
		});
		
		it("will join multiple words with underscores", () => {
			expect(toCode("Hello World")).toEqual("hello_world");
			expect(toCode("Hello World 		and 	other places")).toEqual("hello_world_and_other_places");
		});
	});
	
	describe("isNullOrWhitespace", () => {
		it("will return true on null, undefined, empty or whitespace", () => {
			expect(isNullOrWhitespace(null as any)).toBe(true);
			expect(isNullOrWhitespace(undefined as any)).toBe(true);
			expect(isNullOrWhitespace("")).toBe(true);
			expect(isNullOrWhitespace("\t")).toBe(true);
			expect(isNullOrWhitespace("    ")).toBe(true);
		});
		
		it("will return false if there is a value", () => {
			expect(isNullOrWhitespace("foo")).toBe(false);
			expect(isNullOrWhitespace("baa")).toBe(false);
			expect(isNullOrWhitespace("foo baa")).toBe(false);
		});
	});
	
	describe("toDayFormat", () => {
		it("will return null if the value is null or undefined", () => {
			expect(toDayFormat(null as any)).toBe(null);
			expect(toDayFormat(undefined as any)).toBe(null);
		});
		
		it("will format the date as yyyy-MM-dd", () => {
			expect(toDayFormat(new Date(2014,8,11))).toEqual("2014-09-11");
			expect(toDayFormat(new Date(2014,8,1))).toEqual("2014-09-01");
		});
	});
});