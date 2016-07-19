
import {getUrl} from "../utils";

describe("service", () => {
	describe("getUrl", () => {
		it("will return an empty string if baseUrl or urlSuffix are empty, null or undefined", () => {
			expect(getUrl(null as any, null as any)).toEqual("");
			expect(getUrl()).toEqual("");
		});
		it("will return the full urlSuffix if it starts with http", () => {
			let urlSuffix = "http://www.google.com";
			expect(getUrl("test", urlSuffix)).toEqual(urlSuffix);
		});
		it("will join the host and urlSuffix if urlSuffix does not start with http", () => {
			let result = getUrl("http://www.google.com", "test");
			expect(result).toEqual("http://www.google.com/test");
		});

		it("will fix issues with additional or missing forward slashes", () => {
			let result = getUrl("http://www.google.com", "test");
			expect(result).toEqual("http://www.google.com/test");
			result = getUrl("http://www.google.com/", "test");
			expect(result).toEqual("http://www.google.com/test");
			result = getUrl("http://www.google.com", "/test");
			expect(result).toEqual("http://www.google.com/test");
			result = getUrl("http://www.google.com/", "/test");
			expect(result).toEqual("http://www.google.com/test");
		});

		it("will replace url parameters", () => {
			let result = getUrl("http://www.google.com", "test/{param1}", { param1: 1});
			expect(result).toEqual("http://www.google.com/test/1");
		});

		it("will not replace missing url parameters", () => {
			let result = getUrl("http://www.google.com", "test/{missingParam}", { param1: 1});
			expect(result).toEqual("http://www.google.com/test/{missingParam}");
		});
	});
});