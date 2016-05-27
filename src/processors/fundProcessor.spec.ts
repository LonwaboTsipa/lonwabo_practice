let dataToolkitMock = jest.genMockFromModule("@kurtosys/udm_data_toolkit");
jest.mock("@kurtosys/udm_data_toolkit", () => dataToolkitMock);

import {processFunds} from "./fundProcessor";

describe('src/processors/fundProcessor.ts', () => {
    beforeEach(() => {
        
    });
    describe("processFunds", () => {        
        let dataToLoad = [];
        pit("will return dataLoadingArray with funds", async () => {
            let response = await processFunds(dataToLoad);   
            expect(response).toBeDefined();
            expect(response.funds).toBeDefined();
        })
    });
});