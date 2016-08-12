import {isNullOrUndefined, isUndefined} from "./any";
export function safe<TResult>(action: () => TResult | undefined, defaultResult?: TResult): TResult | undefined {
	try {
		let result = action();
		return !isUndefined(result) ? result : defaultResult;
	} catch (e) {
		if (e.name === "TypeError" || e.name === "ReferenceError") {
			return defaultResult;
		}
		throw e;
	}
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
export function getValueFromComplexKeyIdentifier(sourceField: string | null | undefined, instance: {} | null | undefined, defaultValue: any = null): any {
	let currentObj = instance;
	let value = defaultValue;
	if (!isNullOrUndefined(sourceField)) {
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
	}
	return value;
}