const path = require('path');
var webpack = require('webpack');  
var autoprefixer = require('autoprefixer');
module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss']
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(ttf|eot|woff)(\?.*)?$/,
                use: ['url']
            },
            {
                test: /\.(svg)(\?.*)?$/,
                use: ['url', 'svgo']
            },
            {
                test: /\.html$/,
                use: ['html']
            }

        ],
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "assets/built"),
    },
};