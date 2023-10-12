const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	devServer: {
		static: {
			directory: path.join(__dirname, 'build'),
		},
		port: 3000,
	},

	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'build'),
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'public', 'index.html'),
		}),
	],
	module: {
		// exclude node_modules
		rules: [
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
		],
	},
	// pass all js files through Babel
	resolve: {
		extensions: ['*', '.js'],
	},
}
