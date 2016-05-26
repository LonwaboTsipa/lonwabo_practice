import { fromExcelToDate } from './excel';

describe("excel", () => {
	describe("fromExcelToDate", () => {
		it("will return null if the value is null or undefined", () => {
			expect(fromExcelToDate(null as any)).toBe(null);
			expect(fromExcelToDate(undefined as any)).toBe(null);
		});
		
		it("will try and parse it as a date if it's a string", () => {
			expect(fromExcelToDate("1901/12/11")).toEqual(new Date("1901/12/11"));
		});
		
		it("will convert the excel date number to a date if it's a number", () => {
			expect(fromExcelToDate(37168)).toEqual(new Date(2001,9,4));
		});
	});
});