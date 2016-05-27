let dataToolkitMock = jest.genMockFromModule("@kurtosys/udm_data_toolkit");
jest.mock("@kurtosys/udm_data_toolkit", () => dataToolkitMock);

import {loadDataAsync} from "./index";

describe('index.ts', () => {
    beforeEach(() => {
        
    });
    describe("processTranslations", () => {        
        let dataToLoad = [];
        pit("will return dataLoadingArray with funds", async () => {
            let response = await loadDataAsync();   
            expect(response).toBeDefined();            
        })
    });
});