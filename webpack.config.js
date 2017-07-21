const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const devPath = path.resolve(__dirname, 'dev');
const mainPath = path.resolve(__dirname, 'src', 'app.tsx');

const config = {
    devtool: 'eval',
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        mainPath
    ],
	output: {
		path: devPath,
		filename: './app.bundle.js',
        publicPath: "/dev/"
    },
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".css", ".scss", ".jpg", ".png"],
		alias: {
			'images': path.resolve(__dirname, '/src/assets/images')
		}
	},
	module: {
		rules: [
			{
				test: /\.(scss|css)$/,
				include: path.join(__dirname, 'src/assets/scss'),
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.js$/,
				exclude: nodeModulesPath,
				use: 'babel-loader'
			},
			{
				test: /\.(tsx|ts)$/,
				exclude: nodeModulesPath,
				loader: 'ts-loader'
			},
			{
				test: /\.(jpg|png|svg)$/,
				include: path.join(__dirname, 'src'),
				loader: 'file-loader'
			},
			{
				test: /\.(woff|woff2)$/,
				loader: 'url-loader',
				options: {
					limit: 50000,
					name: './assets/fonts/[name].[ext]'
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin(
			{
				title: "The Hangman",
				template: "./src/assets/templates/index.html",
				minify: {
					collapseWhitespace: true
				},
				hash: true,
				cache: true
			}
		),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin()
	]
};

module.exports = config;

