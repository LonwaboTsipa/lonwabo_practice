let dataToolkitMock = jest.genMockFromModule("@kurtosys/udm_data_toolkit");
jest.mock("@kurtosys/udm_data_toolkit", () => dataToolkitMock);

import {processLayouts} from "./layoutProcessor";

describe('layoutProcessor.ts', () => {
    beforeEach(() => {
        
    });
    describe("processLayouts", () => {
        let funds = [];
        let dataToLoad = [];
        pit("will return dataLoadingArray with layouts", async () => {
            let response = await processLayouts(funds, dataToLoad);   
            expect(response).toBeDefined();
            expect(response.layouts).toBeDefined();
        })
    });
});