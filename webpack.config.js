const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [
            { test: /\.(png|jpe?g|gif|svg|ico|ttf|woff|woff2|eot)$/i, exclude: /node_modules/, loader: "file-loader" },
            { test: /\.css$/i, exclude: /node_modules/, use: ['style-loader', 'css-loader'] },
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}