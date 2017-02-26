import { IBatchOptions, IBatchPromiseElement } from "../models";
import { FONT_COLORS, FONT_SET, FONT_BACKGROUND, colorText, styleConsoleText } from "../utils";

const defaultOptions: IBatchOptions  = {
	maxBatchSize: 100
}

function formatConsoleText(prefix, text) {
	return `${prefix} ${styleConsoleText(text, FONT_COLORS.darkGray)}`;
}

export async function batchExecutePromises(batchPromiseElements: IBatchPromiseElement[], passedOptions: IBatchOptions = {}) {
	const functionName = styleConsoleText('batchExecutePromises', FONT_COLORS.cyan, FONT_SET.bold);
	function styleNumber(value) {
		return styleConsoleText(value, FONT_COLORS.cyan, FONT_SET.bold);
	}
	console.log(`${functionName} starting`);
	console.time(functionName);
	let options = Object.assign({}, defaultOptions, passedOptions);
	let elements : IBatchPromiseElement[] = [].concat(batchPromiseElements);
	const { maxBatchSize } = options;
	let batchCounter = 1;
	let batchTotal = Math.ceil(elements.length / maxBatchSize);

	while (elements.length > 0) {
		const batchIndicator = `${styleNumber(batchCounter)} of ${styleNumber(batchTotal)}`;
		const loggingPrefix = `${functionName}: batch ${batchIndicator}`;
		console.time(loggingPrefix);
		const currentBatchSize = Math.min(elements.length, maxBatchSize);
		console.log(formatConsoleText(loggingPrefix, `starting, items remaining: ${styleNumber(elements.length)}, currentBatchSize: ${styleNumber(currentBatchSize)}`));
		const currentBatch = elements.splice(0, currentBatchSize);
		console.time(formatConsoleText(loggingPrefix, 'promises'));
		let promises = currentBatch.map(element => {
			return element.promiseFunc();	
		});
		let responses = await Promise.all(promises);
		console.log(formatConsoleText(loggingPrefix, 'promises complete, response processing starting'));
		console.timeEnd(formatConsoleText(loggingPrefix, 'promises'));
		console.time(formatConsoleText(loggingPrefix, 'response processing'));
		for (let i = 0; i < responses.length; i++) {			
			let response = responses[i];			
			let element = currentBatch[i];
			await element.responseFunc(response, element.identifier);
		}
		console.log(formatConsoleText(loggingPrefix, 'response processing complete'));
		console.timeEnd(formatConsoleText(loggingPrefix, 'response processing'));
		console.log(formatConsoleText(loggingPrefix, 'ending'));
		console.timeEnd(loggingPrefix);
		batchCounter++;
	}
	console.timeEnd(functionName);
}