let dataToolkitMock = jest.genMockFromModule("@kurtosys/udm_data_toolkit");
jest.mock("@kurtosys/udm_data_toolkit", () => dataToolkitMock);

import {processTranslations} from "./translationProcessor";

describe('src/processors/translationProcessor.ts', () => {
    beforeEach(() => {
        
    });
    describe("processTranslations", () => {        
        let dataToLoad = [];
        it("will return dataLoadingArray with funds", async () => {
            let response = await processTranslations(dataToLoad);   
            expect(response).toBeDefined();
            expect(response.translations).toBeDefined();
        })
    });
});