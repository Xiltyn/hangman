const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const buildPath = path.resolve(__dirname, 'build');
const mainPath = path.resolve(__dirname, 'src', 'app.tsx');

const config = {
    devtool: 'source-map',
    entry: mainPath,
    output: {
        path: buildPath,
        filename: './app.bundle.js'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".css", ".scss", ".jpg", ".png"],
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
        )
    ]
};

module.exports = config;

