var tsc = require('typescript');

module.exports = {
	process: function (src, path) {
		if (path.endsWith('.ts') || path.endsWith(".js")) {
			return tsc.transpile(
				src,
				{
					module: tsc.ModuleKind.CommonJS,
					target: tsc.ScriptTarget.ES6
				},
				path,
				[]
			);			
		}		
		
		return src;
	}
};