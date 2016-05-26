import {isNullOrUndefined} from "./any";
export type GroupedDictionary<TElement> = { [key: string]: TElement[] }

export function firstOrDefault<TElement>(collection: TElement[], defaultResult: TElement | null = null): TElement | null {
	return (collection || []).length === 0 ? defaultResult : collection[0];
}

export function isNullOrEmpty(collection: any[]): boolean {
	return isNullOrUndefined(collection) || collection.length === 0;
}

export function groupBy<TElement>(collection: TElement[], groupFn: (elem: TElement) => string): GroupedDictionary<TElement> {
	let result: GroupedDictionary<TElement> = {};
	for (let col of collection) {
		let groupKey = groupFn(col);
		if(isNullOrUndefined(groupKey)){
			continue;
		}
		if (!result[groupKey]) {
			result[groupKey] = [];
		}

		result[groupKey].push(col);
	}

	return result;
}