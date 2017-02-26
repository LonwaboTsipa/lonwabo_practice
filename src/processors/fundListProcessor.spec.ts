let dataToolkitMock = jest.genMockFromModule("@kurtosys/udm_data_toolkit");
jest.mock("@kurtosys/udm_data_toolkit", () => dataToolkitMock);

import {processFundLists} from "./fundListProcessor";

describe('src/processors/fundListProcessor.ts', () => {
    beforeEach(() => {
        
    });
    describe("processFundLists", () => {
        let funds = [];
        let dataToLoad = [];
        it("will return dataLoadingArray with fund lists", async () => {
            let response = await processFundLists(funds, dataToLoad);   
            expect(response).toBeDefined();
            expect(response.fundLists).toBeDefined();
        })
    });
});