/**
 * Created by dpedro on 1/19/2016.
 */
var debug  = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: "./Dominio/Usuario.ts",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.tsx?$/, loader: 'ts-loader' },
            { test: /\.html$/, loader: 'raw'}
        ]
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false}),
    ],
};