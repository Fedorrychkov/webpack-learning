const path = require('node:path');

module.exports = {
	// не изменять!
	devtool: false,
	mode: 'development',
	entry: {
		app: { import: './src/app.js' },
	},
	output: {
		clean: true,
		path: path.resolve('./bundle'),
    filename: 'awesome-bundle.js',
	},
	resolve: {
		alias: {
			Utils: path.resolve(__dirname, 'src/utilities/'),
			Helpers: path.resolve(__dirname, 'src/helpers/'),
			Components: path.resolve(__dirname, 'src/components/'),
		},
		fallback: {
			coolurl: path.resolve(__dirname, 'src/utilities/url'),
			'_/render': path.resolve(__dirname, 'src/helpers/render'),
			'_/sum': path.resolve(__dirname, 'src/utilities/sum'),
		},
		extensions: ['.js', '.cooljson'],
	},
	module: {
		rules: [
			{
				test: /\.cooljson$/,
				type: 'json'
			}
		]
	},

	// ...ваш конфиг
}
