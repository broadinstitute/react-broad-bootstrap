const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [
        './src/index.js',
        './src/scss/index.scss'
    ],
    module: {
        rules: [
            {
                test: /\.(eot|otf|ttf|woff|woff2)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        "css-loader",
                        "sass-loader"
                    ]
                }),
            }
        ]
    },
    output: {
        filename: 'theme.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin('theme.css')
    ]
};
