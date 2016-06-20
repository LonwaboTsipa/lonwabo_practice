let dataToolkitMock = jest.genMockFromModule("@kurtosys/udm_data_toolkit");
jest.mock("@kurtosys/udm_data_toolkit", () => dataToolkitMock);

import {processTimeseries} from "./timeseriesProcessor";

describe('src/processors/timeseriesProcessor.ts', () => {
    beforeEach(() => {

    });
    describe("processTimeseries", () => {
        let funds = [];
        let dataToLoad = [{
            Date: 42370,
            'Fund Code': 'Fund1',
            Type: 'Timeseries 1',
            Periodicity: 'Monthly',
            Value: 10
        }];
        pit("will return dataLoadingArray with no timeseries", async () => {
            let response = await processTimeseries(funds, []);
            expect(response).toBeDefined();
            expect(response.timeseries).toBeDefined();
            expect(response.timeseries.length).toEqual(0);
        });
        pit("will return dataLoadingArray with timeseries", async () => {
            let response = await processTimeseries(funds, dataToLoad);
            expect(response).toBeDefined();
            expect(response.timeseries).toBeDefined();
            expect(response.timeseries.length).toBe(1);
        });
    });
});