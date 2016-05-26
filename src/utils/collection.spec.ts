import {firstOrDefault} from "./collection";

describe("collection", () => {
	describe("firstOrDefault", () => {
		it("will get the first item in an array", () => {
			expect(firstOrDefault([1])).toBe(1);
			expect(firstOrDefault([true, false])).toBe(true);
		});

		it("can handle an empty array", () => {
			expect(firstOrDefault(null as any)).toEqual(null);
			expect(firstOrDefault(undefined as any)).toEqual(null);
			expect(firstOrDefault([])).toEqual(null);
		});

		it("can give a new default", () => {
			expect(firstOrDefault([], 4)).toBe(4);
			expect(firstOrDefault([], false)).toBe(false);
		});
	});
});