import { IManifest } from "@kurtosys/udm_data_toolkit";
import { IApiRequestOptions } from "./";

export interface IApiManifest extends IManifest {
	apiOptions?: IApiOptionsItems;
}

export interface IApiOptionsItems {
	type?: string;
	body?: {};
	method?: string;
	url?: string;
	deepLinks: any;
	schema?: string;
}