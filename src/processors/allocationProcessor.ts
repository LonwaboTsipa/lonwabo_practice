export async function deferredConstant<T>(input : T, delay: number) : Promise<T> {
	return input;
}

async function foo() {
	let result = await deferredConstant('string', 1);	
}
