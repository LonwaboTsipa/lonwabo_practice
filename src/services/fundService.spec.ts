let dataToolkitMock = jest.genMockFromModule<any>("@kurtosys/udm_data_toolkit");
// TODO: Implement proper mock
// dataToolkitMock.LOADER_CONFIG = {
//     "originalConfig": {
//         "endPoints": {
//             "search": "some url"
//         }
//     }
// };
// jest.mock("@kurtosys/udm_data_toolkit", () => dataToolkitMock);

import {fetchFunds} from "./fundService";

describe('src/services/fundService.ts', () => {
    beforeEach(() => {
        
    });
       
    
    xdescribe("fetchFunds", () => {
        let funds = [];
        let dataToLoad = [];
		let token = "";
        pit("will return funds", async () => {
            //let response = await fetchFunds(token);   
            //expect(response).toBeDefined();
            
        })
    });
});