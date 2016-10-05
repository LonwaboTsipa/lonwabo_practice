export interface IApiRequestOptions {
    dontParseBodyAsJson?: boolean;
	requestBody?: {};
	urlParameters?: {};
	requestHeaders?: {};
	passRequestBodyToDeepLinks?: boolean;
	passUrlParametersToDeepLinks?: boolean;
	passRequestHeadersToDeepLinks?: boolean;
	parentRequestBody?: {};
	parentUrlParameters?: {};
	parentRequestHeaders?: {};	
}