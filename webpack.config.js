const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const miniCSS = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/js/app.js'),
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist/')
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/public/index.html',
        }),
        new CleanWebpackPlugin(),
        new miniCSS({
            filename : 'style.css'
        })
    ],
    module:{
       rules:[
            {
                test: /\.(s*)css$/,
                use: [
                    miniCSS.loader,
                    'css-loader',
                    'sass-loader',
                ]
            }
       ]
    },
    devServer: {
        port: 9000,
    },
};