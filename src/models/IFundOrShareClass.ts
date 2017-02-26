import { IPropertyPub, IBaseEntity } from "@kurtosys/udm_data_toolkit";
export interface IFundOrShareClass {
    type: 'CLSS' | 'FUND';
    clientCode: string;
    propertiesPub: IPropertyPub;
    properties_pub: IPropertyPub;
	statistics: IBaseEntity[];
}