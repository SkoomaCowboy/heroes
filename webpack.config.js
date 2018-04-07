const path = require("path")
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")
const webpack = require("webpack")

module.exports = {
    mode: "development",
    context: __dirname,
    devtool: "inline-source-map",
    entry: "./src/index.tsx",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        plugins: [
            new TsconfigPathsPlugin({
                configFile: "./tsconfig.json",
            }),
        ],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"],
            },
        ],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all",
                },
            },
        },
    },
    plugins: [new webpack.NamedModulesPlugin()],
    serve: {
        content: "./dist/",
    },
}
