let dataToolkitMock = jest.genMockFromModule("@kurtosys/udm_data_toolkit");
jest.mock("@kurtosys/udm_data_toolkit", () => dataToolkitMock);

import {loadDataAsync} from "./index";

describe('index.ts', () => {
    beforeEach(() => {
        
    });
    describe("loadDataAsync", () => {        
        let dataToLoad = [];
        pit("will call to the loadDataAsync method", async () => {
            let response = await loadDataAsync();  
            // Logic needs to be added here 
            expect(1).toEqual(1);            
        })
    });
});