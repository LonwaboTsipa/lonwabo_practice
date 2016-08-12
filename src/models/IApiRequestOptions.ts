export interface IApiRequestOptions {
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