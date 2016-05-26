import { isNullOrUndefined} from "../utils";
/**
 * Returns a label as a value that can be a code.
 * @example 
 * toCode("Hello world"); //"hello_world"
 * toCode("this IS a bunch of values 1"); //"this_is_a_bunch_of_values_1"
 * @export
 * @param {string} label 
 * @returns {string} that is code compatible.
 */
export function toCode(label: string): string {
	return (label || "")
		.split(/\s+/)
		.filter(s => s.trim() !== "")
		.map(s => s.toLowerCase())
		.join("_");
}

/**
 * Checks if a string is null or whitespace.
 * 
 * @export
 * @param {string} value to check if the value is null or whitespace
 * @returns {boolean} true if it's null, undefined, empty or whitespace else false
 */
export function isNullOrWhitespace(value: string): boolean {
	return (value || "").trim() === "";
}

//TODO : If this get's any bigger then use moment

/**
 * Produces a date format
 * 
 * @export
 * @param {Date} date (description)
 */
export function toDayFormat(date: Date): string | null {
	if (isNullOrUndefined(date)){
		return  null;
	}
	
	let padValue = (value:number) => value < 10 ? `0${value}` : value.toString();
	return `${date.getFullYear()}-${padValue(date.getMonth() + 1)}-${padValue(date.getDate())}`;	
}