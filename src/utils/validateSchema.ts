import { Validator, IJSONSchemaResult } from "jsonschema";

export function validateJSONSchema(instance: {}, schema: {}): IJSONSchemaResult {
	let v = new Validator();
	return v.validate(instance, schema);
}