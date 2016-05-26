import {isNullOrUndefined} from "./any";

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
});