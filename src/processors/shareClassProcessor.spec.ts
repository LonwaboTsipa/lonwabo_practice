let dataToolkitMock = jest.genMockFromModule("@kurtosys/udm_data_toolkit");
jest.mock("@kurtosys/udm_data_toolkit", () => dataToolkitMock);

import {processShareClasses} from "./shareClassProcessor";

describe('src/processors/shareClassProcessor.ts', () => {
    beforeEach(() => {
        
    });
    describe("processShareClasses", () => {        
        let dataToLoad = [];
        pit("will return dataLoadingArray with classes", async () => {
            let response = await processShareClasses(dataToLoad);   
            expect(response).toBeDefined();
            expect(response.classes).toBeDefined();
        })
    });
});