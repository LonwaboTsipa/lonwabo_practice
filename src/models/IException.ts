export interface IException {
	message?: string;
	code?: string;
	description?: string;
	apiDetails?: IApiExceptionDetails;
}

export interface IApiExceptionDetails {
	method?: string;
	url?: string;
	requestBody?: string;
	response?: string;
	expectedSchema?: string;
	schemaValidationResponse?: string;
}