var nodeExternals = require('webpack-node-externals');
var webpack = require('webpack');
var path = require('path');
var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

var srcDir = path.resolve(__dirname, "src");
var distDir = path.resolve(__dirname, "dist");
var artifactDir = path.resolve(__dirname, "artifacts");

module.exports = {
	target: "node",
	entry: ["babel-polyfill", "./src/index"],
	output: {
		path: distDir,
		filename: "index.js",
		//This corrects the map files to be relative to the distrubution
		devtoolModuleFilenameTemplate: function (info) {
			return path.relative(distDir, info.absoluteResourcePath);
		}
	},
	externals: [nodeExternals()],
	resolve: {
		extensions: ["", ".ts", ".js", ".json"]
	},
	module: {
		
		loaders: [
			{ test: /\.ts$/, loader: "awesome-typescript", includes: [srcDir] },
			{ test: /\.json$/, loader: 'json', exclude: "node_modules" }
		]
	},
	plugins: [
		new ForkCheckerPlugin(),
        new webpack.ProvidePlugin({
			'fetch': 'node-fetch'
		})
	],
	devtool: "source-map"
};