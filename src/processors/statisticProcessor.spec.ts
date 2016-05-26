let dataToolkitMock = jest.genMockFromModule("@kurtosys/udm_data_toolkit");
jest.mock("@kurtosys/udm_data_toolkit", () => dataToolkitMock);

import {processStatistics} from "./statisticProcessor";

describe('statisticsProcessor.ts', () => {
    beforeEach(() => {
        
    });
    describe("processStatistics", () => {
        let funds = [];
        let dataToLoad = [];
        pit("will return dataLoadingArray with statistics", async () => {
            let response = await processStatistics(funds, dataToLoad);   
            expect(response).toBeDefined();
            expect(response.statistics).toBeDefined();
        })
    });
});