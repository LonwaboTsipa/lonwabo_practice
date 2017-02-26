#!/usr/bin/env node
import { dataLoadingArray } from "@kurtosys/udm_data_toolkit";
import * as fs from "fs";
import * as path from "path";
import { loadFiles, listFiles } from "@kurtosys/ksys_utils/dist/file";

export const rootDir = path.resolve(process.cwd(), "artifacts");
function processLayoutComponents() {
	let response = new dataLoadingArray();
	if (!response["layoutComponents"]) {
		response["layoutComponents"] = [];
	}
	let componentFiles = listFiles(path.join(rootDir, 'config/layout/components'), "");
	if (componentFiles && componentFiles.length > 0) {
		let componentFilesWithContent = loadFiles(componentFiles);
		componentFilesWithContent.map(componentFileWithContent => {
			let fileJson : any = null;
			try {
				fileJson = JSON.parse(componentFileWithContent.data);
			}
			catch (ex) {
				console.log('Error while parsing component file to json');
			}
			if (fileJson && typeof fileJson === 'object') {
				response["layoutComponents"].push(fileJson);
			}
		});
	}	
	return response;
}

processLayoutComponents();