let dataToolkitMock = jest.genMockFromModule("@kurtosys/udm_data_toolkit");
jest.mock("@kurtosys/udm_data_toolkit", () => dataToolkitMock);

import {processCommentaries} from "./commentaryProcessor";

describe('src/processors/commentaryProcessor.ts', () => {
    beforeEach(() => {
        
    });
    describe("processCommentaries", () => {    
        let funds = [];    
        let dataToLoad = [];
        pit("will return dataLoadingArray with funds", async () => {
            let response = await processCommentaries(funds, dataToLoad);   
            expect(response).toBeDefined();
            expect(response.commentary).toBeDefined();
        })
    });
});