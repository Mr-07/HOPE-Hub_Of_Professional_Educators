import { resolve as _resolve } from "path";
import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";

export const entry = "./src/index.js";
export const mode = "development";
export const output = {
    path: _resolve("build"),
};
export const module = {
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
            test: /\.(png|svg|jpg|gif)$/,
            use: "file-loader",
        },
        {
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "sass-loader"],
        },
    ],
};
export const plugins = [
    new HTMLWebpackPlugin({
        template: "index.html",
        filename: "index.html"
    }),
];
export const resolve = {
    alias: {
        'components': _resolve(__dirname, "src/components/"),
        'images': _resolve(__dirname, "src/images/"),
        'common': _resolve(__dirname, "src/common/"),
    },
};
