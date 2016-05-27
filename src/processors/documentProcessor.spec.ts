let dataToolkitMock = jest.genMockFromModule("@kurtosys/udm_data_toolkit");
jest.mock("@kurtosys/udm_data_toolkit", () => dataToolkitMock);

import {processDocuments} from "./documentProcessor";

describe('src/processors/documentProcessor.ts', () => {
    beforeEach(() => {
        
    });
    describe("processDocuments", () => {
        let funds = [];
        let dataToLoad = [];
        pit("will return dataLoadingArray with documents", async () => {
            let response = await processDocuments(funds, dataToLoad);   
            expect(response).toBeDefined();
            expect(response.documents).toBeDefined();
        })
    });
});