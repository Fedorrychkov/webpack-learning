const path = require('path');

module.exports = {
	devtool: false,
	mode: 'development',

	// ...ваш конфиг
	entry: {
		app: './src/app.js',
	},
	output: {
		clean: true,
    filename: 'main.js',
	},
	resolve: {
		alias: {
			Components: path.resolve(__dirname, 'src/components/'),
			Mocks: path.resolve(__dirname, 'src/mocks/'),
		},
		extensions: ['.js', '.txt', '.json5'],
	},
	resolveLoader: {
		modules: [
			'node_modules',
			path.resolve(__dirname, 'loaders')
		],
	},
	module: {
		rules: [
			{
				test: /\.json5/,
				type: 'json',
				use: [
					{
						loader: 'metajson-loader',
						options: {
							name: 'metajson',
							kekValue: 100500,
						},
					},
					'json5-loader'
				]
			},
			{
				test: /\.txt/,
				use: ['txt-loader']
			}
		]
	},
}
