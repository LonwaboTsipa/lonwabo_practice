import { IPropertyPub, IBaseEntity } from "@kurtosys/udm_data_toolkit";
export interface IFundOrShareClass {
    clientCode: string;
    propertiesPub: IPropertyPub;
	statistics: IBaseEntity[]
}