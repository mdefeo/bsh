const path = require('path');
var webpack = require('webpack');  
var autoprefixer = require('autoprefixer');

module.exports = {
    mode: 'development',
    plugins: [
        new webpack.DefinePlugin({
          'process.env.HYVOR_SSO_KEY': JSON.stringify("988bf47f56422d08b140ac8ae1142aff"),
          'process.env.HYVOR_WEB_ID': JSON.stringify("8652"),
          'process.env.BSH_DOMAIN': JSON.stringify("https://broadstreethockey.com/"),
          'process.env.BSH_DOMAIN_STAGING': JSON.stringify("https://broad-street-hockey.ghost.io/"),
          'process.env.BSH_DOMAIN_DEV': JSON.stringify("http://localhost:2368"),
        })
    ],
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