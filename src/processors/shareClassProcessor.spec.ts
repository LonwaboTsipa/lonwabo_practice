import { IManifest } from "@kurtosys/udm_data_toolkit";
let dataToolkitMock = jest.genMockFromModule("@kurtosys/udm_data_toolkit");
jest.mock("@kurtosys/udm_data_toolkit", () => dataToolkitMock);


import {processShareClasses} from "./shareClassProcessor";

const manifest = <{[key : string] : IManifest}[]>require("../../spec/fixtures/orchestrated-manifest");

describe('src/processors/shareClassProcessor.ts', () => {
    beforeEach(() => {
        
    });
    describe("processShareClasses", () => { 
        it("will return dataLoadingArray with classes", async () => {
            let response = await processShareClasses(manifest);   
            expect(response).toBeDefined();
            expect(response.classes).toBeDefined();
        })
    });
});