let dataToolkitMock = jest.genMockFromModule("@kurtosys/udm_data_toolkit");
jest.mock("@kurtosys/udm_data_toolkit", () => dataToolkitMock);

import { IManifest } from "@kurtosys/udm_data_toolkit";
import {processTimeseries} from "./timeseriesProcessor";

const manifest = <{[key : string] : IManifest}[]>require("../../spec/fixtures/orchestrated-manifest");
const fundsAndSharesData = require("../../spec/fixtures/fetched-db-funds-and-shares");

describe('src/processors/timeseriesProcessor.ts', () => {
    beforeEach(() => {

    });
    describe("processTimeseries", async () => {

        pit("will return dataLoadingArray with no timeseries", async () => {
            let dataToLoad = await processTimeseries(fundsAndSharesData, []);
            expect(dataToLoad).toBeDefined();
            expect(dataToLoad.timeseries).toBeDefined();
            expect(dataToLoad.timeseries.length).toEqual(0);
        });
        pit("will return dataLoadingArray with timeseries", async () => {
            let dataToLoad = await processTimeseries(fundsAndSharesData, manifest);
            expect(dataToLoad).toBeDefined();
            expect(dataToLoad.timeseries).toBeDefined();
            expect(dataToLoad.timeseries.length).toBe(1);
        });
    });
});