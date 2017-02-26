export interface ILayoutConfigurationType {
	type: string;
	tags: ILayoutConfigurationTypeTagOption[];
	componentCodes: string[];
}

export interface ILayoutConfigurationTypeTagOption {
	key: string;
	selector: string;
	order: number;
}

export interface ILayoutFileMapping {
	[property: string]: any;
}

export interface ILayoutFile {
	filename?: string;
	tag?: any;	
	json?: any;
}

export interface IFundPageLayout {
	fund_overview: IAtomElement;
	key_information: IAtomElement;
	fund_performance: IAtomElement;
	fund_pricing: IAtomElement;
	fund_team: IAtomElement;
	fund_characteristics: IAtomElement;
	fund_allocations: IAtomElement;
	fees_and_expenses: IAtomElement;
	literature: IAtomElement;
	fund_risks: IAtomElement;
}

export interface IFundPageLayoutConfigurationResponse {
	valid: boolean;
	layoutConfiguration?: IFundPageLayoutConfiguration;
}

export interface IFundPageLayoutConfiguration {
	layoutConfigurationId: number;
	clientId: number;
	layoutConfigurationTypeId: number;
	configuration: IFundPageLayout;
	clientCodes?: string[];
	tags?: {
		fund_id?: string;
		isin?: string;
	};
}

export interface IAtomElement {
	elementProperties?: IAtomElementProperties;
	elements?: IAtomElement[];
}

export interface IAtomElementProperties {
	visible: boolean;
	key: string;
	disclaimers?: IDisclaimer[];
	label?: string;
}

export interface IDisclaimer {
	disclaimerType: string;
	conditionFormat?: string;
	conditions?: IDisclaimerCondition[];
}

export interface IDisclaimersByType {
	[property: string]: IDisclaimer;
}

export interface IDisclaimerCondition {
	field: string;
	operator: string;
	value: string;
}

export interface IAtomContext {
	layout?: IAtomElement;
	addDisclaimer?: Function;
	elementContext?: any;

}

export interface IInfoCardContext {
	getDisclaimers?: Function;
}