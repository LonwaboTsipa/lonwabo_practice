import { safe } from './function';

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
});