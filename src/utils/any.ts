/**
 * Checks to see if the value is null or udefined
 * 
 * @export
 * @param {*} value Value to check
 * @returns {boolean} true if it's null or udefined else false
 */
export function isNullOrUndefined<T>(value: T | null | undefined): value is null | undefined {
	return value === null || isUndefined(value); 
}

export function isUndefined<T>(value: T | undefined): value is undefined {
	return value === void 0; 
}
