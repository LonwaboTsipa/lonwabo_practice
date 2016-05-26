import { isNullOrUndefined } from '../utils';
import {XlsxData} from "@kurtosys/udm_data_toolkit";

const SERIAL_DATE_START = new Date(1900,0,0);

/**
 * Formats excel dates to javascript date
 * 
 * @export
 * @param {(number | string)} excelValue value to format, if it's a number use excel conversion else use js Date parsing.
 * @returns
 */
export function fromExcelToDate(excelValue:number | string){
	if(isNullOrUndefined(excelValue)){
		return  null;
	}
	
	if(typeof excelValue === "number"){
		let resultDate = new Date(SERIAL_DATE_START.valueOf());
		resultDate.setDate(resultDate.getDate() + excelValue - 1);
		return resultDate;
	} else {
		return  new Date(excelValue);	
	}	
}

/**
 * Remove header row from the excel data
 * 
 * @export
 * @param {XlsxData} excelData that needs to have the header removed
 * @returns
 */
export function removeHeaderRow(excelData: XlsxData) {
    if (excelData.length > 0) {
        let firstRow = excelData[0];
        let hasHeaderRow = true;
        for (let key in firstRow) {
            if (!firstRow[key] || firstRow[key].toString().toLowerCase() !== key.toLowerCase()) {
                 hasHeaderRow = false;
                 break;
            }
        }
        if (hasHeaderRow) {
            excelData.shift();
        }        
    }
}