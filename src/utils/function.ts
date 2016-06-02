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