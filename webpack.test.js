var config = require("./webpack.config");
var path = require('path');

//Replace the entry point with the test one
config.entry.splice(1,1,"./src/testentry");
config.output.filename = "test.js"	 
 
 module.exports = config;