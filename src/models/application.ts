export interface IProcessOptions {
	forceMorningstarUpdate?: boolean;
}

export interface IOriginalLoaderConfig {
	endPoints: {
		search: string;
	},
	externalApi: {
		[property: string]: {
			isTextResponse?: boolean;
			type: string;
			baseUrl: string;
			username?: string;
			password?: string;
			certificateName?: string;
			certificatePassphrase?: string;
			headers?: any;
		}
	}
}