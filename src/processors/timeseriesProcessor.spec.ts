let dataToolkitMock = jest.genMockFromModule("@kurtosys/udm_data_toolkit");
jest.mock("@kurtosys/udm_data_toolkit", () => dataToolkitMock);

import {processTimeseries} from "./timeseriesProcessor";

describe('src/processors/timeseriesProcessor.ts', () => {
    beforeEach(() => {
        
    });
    describe("processTimeseries", () => {
        let funds = [];
        let dataToLoad = [];
        pit("will return dataLoadingArray with timeseries", async () => {
            let response = await processTimeseries(funds, dataToLoad);   
            expect(response).toBeDefined();
            expect(response.timeseries).toBeDefined();
        })
    });
});