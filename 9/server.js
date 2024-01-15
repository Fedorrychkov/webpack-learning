const express = require("express");
const webpack = require("webpack");
const middleware = require("webpack-dev-middleware");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const app = express();

const compiler = webpack({
  // webpack options
	mode: 'development',
  devtool: 'source-map',
	entry: {
		app: './src/app.js',
		home: './src/pages/home.js',
		login: './src/pages/login.js',
	},

	resolve: {
		alias: {
			components: path.resolve(__dirname, './src/components/'),
			assets: path.resolve(__dirname, './src/assets/'),
		},
		extensions: ['.js', '.png'],
	},
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'base.html',
    }),
  ],
	module: {
		rules: [
      {
        test: /\.(png)$/i,
        type: 'asset',
        generator: {
					filename: '[name][ext]',
        }
      },
    ]
  },
});

app.use(
  middleware(compiler, {
    serverSideRender: false,
    writeToDisk: false,
    headers: [ {key: "X-custom-header", value: "foo"} ],
  }),
);


const port = 3000;
app.listen(port, () => console.log(`Server listening at ${port}`));
 