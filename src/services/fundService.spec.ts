let dataToolkitMock = jest.genMockFromModule("@kurtosys/udm_data_toolkit");
jest.mock("@kurtosys/udm_data_toolkit", () => dataToolkitMock);

import {fetchFunds} from "./fundService";

describe('src/services/fundService.ts', () => {
    beforeEach(() => {
        
    });
    describe("fetchFunds", () => {
        let funds = [];
        let dataToLoad = [];
		let token = "";
        pit("will return funds", async () => {
            let response = await fetchFunds(token);   
            expect(response).toBeDefined();
            
        })
    });
});