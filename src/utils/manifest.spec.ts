import { orchestrateManifest } from './manifest';

describe("manifest", () => {
	describe("orchestrateManifest", () => {
		it("will return an object of the array based on the key attribute of the manifest item", () => {
			let rawManifest = [{ key: "test", value: 0 }];
			let expectedResult = {
				"test": { key: "test", value: 0 }
			};
			expect(orchestrateManifest(rawManifest as any)).toEqual(expectedResult);
			
		});	
	});
});