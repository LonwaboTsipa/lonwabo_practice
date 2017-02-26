import * as Primitive from '../xml-primitives';

// Source files:
// http://localhost:7777/static/XSD/GetUniverse.xsd


export interface BaseType {
	_exists: boolean;
	_namespace: string;
}
export interface _FundShareClassListType extends BaseType {
	ShareClass?: FundShareClassListTypeShareClassType[];
}
export interface FundShareClassListType extends _FundShareClassListType { constructor: { new(): FundShareClassListType }; }

export interface _FundShareClassListTypeShareClassType extends BaseType {
	Id: string;
	ISIN: string;
	LastUpdated: string;
	LastUpdated_NT?: FundShareClassListTypeShareClassTypeLastUpdated_NTType[];
	LegalStructure: string;
	MSCategoryId: string;
	Name: string;
}
export interface FundShareClassListTypeShareClassType extends _FundShareClassListTypeShareClassType { constructor: { new(): FundShareClassListTypeShareClassType }; }

export interface _FundShareClassListTypeShareClassTypeLastUpdated_NTType extends Primitive._string {
	Id?: number;
	Type?: number;
}
export interface FundShareClassListTypeShareClassTypeLastUpdated_NTType extends _FundShareClassListTypeShareClassTypeLastUpdated_NTType { constructor: { new(): FundShareClassListTypeShareClassTypeLastUpdated_NTType }; }

export interface document extends BaseType {
	FundShareClassList: FundShareClassListType;
}
export var document: document;
