const path = require('node:path');

module.exports = {
	devtool: false,
	mode: 'development',
	// ...ваш конфиг

	entry: {
		app: { import: './src/app.js', dependOn: 'vendor' },
		home: { import: './src/pages/home.js', dependOn: 'vendor' },
		login: { import: './src/pages/login.js' },
		vendor: ['react', 'react-dom'],
	},
	output: {
		clean: true,
		path: path.resolve('./build'),
    filename: '[name].[contenthash].js',
	}
}
