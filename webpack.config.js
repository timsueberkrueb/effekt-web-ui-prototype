const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './bootstrap.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: 'body'
        })
    ],
    module: {
        rules: [
        ]
    },
    devtool: 'source-map'
};
