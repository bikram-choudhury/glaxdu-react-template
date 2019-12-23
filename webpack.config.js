const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    module: {
        rules: [
            { test: /\.(png|jpe?g|gif|svg|ico|ttf|woff|woff2|eot)$/i, loader: "file-loader" },
            { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
    output: {
        path: path.join(__dirname, '/bundle'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true,
    }
}