const path = require("path");
const isDev = process.env.NODE_ENV === "development";
const WebpackBar = require("webpackbar");

module.exports = {
    mode: isDev ? "development" : "production",
    entry: {
        app: path.join(__dirname, "src", "index.tsx"),
    },
    target: "web",
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: "/node_modules/",
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [new WebpackBar()],
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        library: "[name]",
        libraryTarget: "umd",
    },
};
