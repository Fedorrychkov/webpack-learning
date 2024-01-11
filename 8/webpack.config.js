const path = require('path');

module.exports = {
	devtool: false,
	mode: 'development',
	// ...ваш конфиг
	entry: path.resolve(__dirname, './src/app.js'),
	output: {
		clean: true,
		path: path.resolve('./bundle'),
    filename: 'main.js',
	},
	resolve: {
		alias: {
			assets: path.resolve(__dirname, 'src/assets/'),
			[path.resolve(__dirname, './src/assets/no-data.txt')]: false
		},
		
		extensions: ['.js', '.txt', '.png', '.svg'],
	},
	module: {
		rules: [
			{
				test: /\.txt$/i,
				type: 'asset/source'
			},
			{
				test: /\.(svg)$/i,
				type: 'asset/inline',
			},
			{
        test: /\.(png)$/i,
        type: 'asset',
				parser: {
          dataUrlCondition: {
            maxSize: 35 * 1024,
          },
        },
        generator: {
					filename: 'images/[name][ext]',
          dataUrl: content => {
            return `data:image/png;base64,${content.toString('base64')}`;
          }
        }
      },
		]
	},
}
