let dataToolkitMock = jest.genMockFromModule("@kurtosys/udm_data_toolkit");
jest.mock("@kurtosys/udm_data_toolkit", () => dataToolkitMock);

import {processAllocations} from "./allocationProcessor";

describe('src/processors/allocationProcessor.ts', () => {
    beforeEach(() => {
        
    });
    describe("processAllocations", () => {
        let funds = [];
        let dataToLoad = [];
        it("will return dataLoadingArray with allocations", async () => {
            let response = await processAllocations(funds, dataToLoad);   
            expect(response).toBeDefined();
            expect(response.allocations).toBeDefined();
        })
    });
});