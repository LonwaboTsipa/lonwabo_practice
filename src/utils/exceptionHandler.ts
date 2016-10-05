import {IException} from "../models";

const API_EXCEPTIONS = <IException[]>[];
export function clearExceptions() {
	if (API_EXCEPTIONS.length > 0) {
		API_EXCEPTIONS.splice(0, API_EXCEPTIONS.length);
	}	
}

export function addException(exception: IException) {
	API_EXCEPTIONS.push(exception);
}