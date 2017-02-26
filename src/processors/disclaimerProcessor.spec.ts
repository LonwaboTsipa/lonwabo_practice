let dataToolkitMock = jest.genMockFromModule("@kurtosys/udm_data_toolkit");
jest.mock("@kurtosys/udm_data_toolkit", () => dataToolkitMock);

import {processDisclaimers} from "./disclaimerProcessor";

describe('src/processors/disclaimerProcessor.ts', () => {
    beforeEach(() => {
        
    });
    describe("processDisclaimers", () => {    
        let funds = [];    
        let dataToLoad = [];
        it("will return dataLoadingArray with funds", async () => {
            let response = await processDisclaimers(funds, dataToLoad);   
            expect(response).toBeDefined();
            expect(response.disclaimers).toBeDefined();
        })
    });
});