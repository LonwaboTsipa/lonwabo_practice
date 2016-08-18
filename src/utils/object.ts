import { isNullOrUndefined, isUndefined, safe } from "../utils";
const OPEN_CHAR = '{';
const CLOSE_CHAR = '}';
const MODIFIER_SEPARATOR = ":";
export function getValueFromStringNotation(stringNotation: string | null | undefined, instance: {} | null | undefined, defaultValue: any = null) : any {
    let value = null;
	let parameterList = getInnerParameters(stringNotation);
	if (parameterList && parameterList.length > 0) {
		let parameters = {};
		for (let parameter of parameterList) {
			let parameterValue = getValueFromDotNotation(parameter, instance, defaultValue);
			if (parameterValue) {
				parameters[parameter] = parameterValue;	
			}			
		}
		value = stringNotation;
		for (let parameter of Object.keys(parameters)) {
			let fullParameter = `${OPEN_CHAR}${parameter}${CLOSE_CHAR}`;
			value = value.split(fullParameter).join(parameters[parameter]);
		}
	}
	else {
		value = getValueFromDotNotation(stringNotation, instance, defaultValue);
	}
	

	if (isNullOrUndefined(value)) {
		value = defaultValue;
	}

    return value;       
}
/**
 * This will get the value from the property for a complex identifier (If the source field is deeper than the base object it will traverse)
 *  
 * @export
 * @param {(string |)} [sourceField=null | undefined]
 * @param {({} |)} [instance=null | undefined]
 * @param {*} [defaultValue=null]
 * @returns {*}
 */
export function getValueFromDotNotation(sourceField: string | null | undefined, instance: {} | null | undefined, defaultValue: any = null): any {
	let currentObj = instance;
	let value = defaultValue;
	if (!isNullOrUndefined(sourceField)) {
		let modifierDetails = null;
		if (sourceField.indexOf(MODIFIER_SEPARATOR) > -1) {
			modifierDetails = sourceField.split(MODIFIER_SEPARATOR);
			sourceField = modifierDetails.shift();
		}
		let sourceFieldSplit = sourceField.split('.');
		while (sourceFieldSplit.length > 0) {
			if (!currentObj) {
				break;
			}
			let attr = <string>sourceFieldSplit.shift();
			if (!isNullOrUndefined(attr)) {
				if (sourceFieldSplit.length > 0) {
					currentObj = safe(() => currentObj[attr], null);
				}
				else {
					value = safe(() => currentObj[attr], defaultValue);
				}
			}
		}
		if (modifierDetails) {
			value = applyModifier(value, modifierDetails);
		}		
	}
	return value;
}

export function applyModifier(value: any, modifierDetails: string[] = []) : any {
	if (modifierDetails && modifierDetails.length > 0 && !isNullOrUndefined(value) && typeof value !== "object") {
		let firstModifier = modifierDetails[0];
		// Upper case
		if (firstModifier === 'U') {
			value = value.toString().toUpperCase();
		}
		if (firstModifier === 'L') {
			value = value.toString().toLowerCase();
		}
	}
	return value;
}

export function getInnerParameters(stringNotation: string): string[] {
	let result = [];
	let workingNotation = stringNotation;
	let isOpen = false;
	let currentParameter = '';
	for (let char of workingNotation.split('')) {
		if (char === OPEN_CHAR) {
			if (!isOpen) {
				currentParameter = '';
				isOpen = true;
			}
			else {
				throw new Error('object: getInnerParameters: Nested parameters not supported in string notation');
			}
		}
		else if (char === CLOSE_CHAR) {
			if (isOpen) {
				isOpen = false;				
				result.push(currentParameter);
				currentParameter = "";
			}
			else {
				throw new Error('object: getInnerParameters: No opening tag found for parameter');
			}
		}
		else if (isOpen) {
			currentParameter += char;
		}
	}	
	if (isOpen) {
		throw new Error(`object: getInnerParameters: No closing tag found for parameter (${currentParameter})`);
	}
	return result;
}
