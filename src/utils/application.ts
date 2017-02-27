import { isNumeric } from "../utils";
import { IProcessOptions } from "../models";

const validProcessOptions = [
	{ key: 'forceMorningstarUpdate', type: 'boolean' }
];

let processOptions: IProcessOptions;

export function getProcessOptions(): IProcessOptions {
	if (processOptions) {
		return processOptions;
	}
	let response: IProcessOptions = {
		forceMorningstarUpdate: false
	};
	console.log('process.argv', process.argv);
	for (let processOption of validProcessOptions) {
		for (let arg of process.argv.filter(a => a.startsWith(`${processOption.key}=`))) {

			let argSplit = arg.split('=');
			if (argSplit.length > 1) {
				let mustAssign = true;
				let value: any = argSplit[1];
				switch (processOption.type) {
					case "boolean":
						value = value && value.toLowerCase() === 'true';
						break;
					case "number":
						if (isNumeric(value)) {
							value = parseFloat(value);
						}
						else {
							mustAssign = false;
						}
						break;
				}
				if (mustAssign) {
					response[argSplit[0]] = value;
				}
			}
		}
	}
	processOptions = response;
	return response;
}