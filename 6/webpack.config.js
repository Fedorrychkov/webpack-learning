const path = require('node:path');

const CopyCustomPlugin = require('./plugins/copy.static')
const StatsCustomPlugin = require('./plugins/stats')

module.exports = {
	devtool: false,
	mode: 'development',
	entry: {
		app: './src/app.js',
		home: './src/pages/home.js',
		login: './src/pages/login.js',
	},
	output: {
		clean: true,
    filename: '[name].js',
	},
	plugins: [
		new CopyCustomPlugin(),
		new StatsCustomPlugin(),
	],
	// ...ваш конфиг
}
