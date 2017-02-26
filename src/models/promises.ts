export interface IBatchOptions {
	maxBatchSize?: number;
}
export interface IBatchPromiseElement {
	identifier?: any;
	promiseFunc: Function;
	responseFunc: (response: any, identifier: any) => void;
}