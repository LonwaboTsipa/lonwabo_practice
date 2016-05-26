/**
 * Checks to see if the value is null or udefined
 * 
 * @export
 * @param {*} value Value to check
 * @returns {boolean} true if it's null or udefined else false
 */
export function isNullOrUndefined(value: any): boolean {
	return value === null || value === void 0; 
}

