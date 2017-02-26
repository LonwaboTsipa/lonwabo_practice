import {IManifest} from "@kurtosys/udm_data_toolkit";

let dataToolkitMock = jest.genMockFromModule("@kurtosys/udm_data_toolkit");
jest.mock("@kurtosys/udm_data_toolkit", () => dataToolkitMock);

import {processFunds} from "./fundProcessor";

const manifest = <{[key : string] : IManifest}[]>require("../../spec/fixtures/orchestrated-manifest");

describe('src/processors/fundProcessor.ts', () => {
    beforeEach(() => {
        
    });
    describe("processFunds", () => {    
        it("will return dataLoadingArray with funds", async () => {
            let response = await processFunds(manifest);   
            expect(response).toBeDefined();
            expect(response.funds).toBeDefined();
        });        
    });
});