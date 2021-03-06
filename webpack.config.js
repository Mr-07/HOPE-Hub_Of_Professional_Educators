const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        path: path.resolve("build"),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test: /\.html$/,
                use: "html-loader",
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                use: "file-loader",
            },
            {
                test: /\.(scss|css)$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "index.html",
            filename: "index.html"
        }),
    ],
    resolve: {
        alias: {
            'components': path.resolve(__dirname, "src/components/"),
            'images': path.resolve(__dirname, "src/images/"),
            'icons': path.resolve(__dirname, "src/icons/"),
            'common': path.resolve(__dirname, "src/common/"),
            'auth': path.resolve(__dirname, "src/auth/"),
        },
    },
};
