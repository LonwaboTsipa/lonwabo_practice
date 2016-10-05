import { IPropertyDescriptor, DataType } from "@kurtosys/udm_data_toolkit";

export interface IMappingPropertyDescriptor extends IPropertyDescriptor {
	code: string;
	dataType: DataType;
	sourceField: string;
}

export interface IMapping {
	type: string;
	mappings: IMappingPropertyDescriptor[];
}