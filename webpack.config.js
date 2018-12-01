const path = require("path")
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")
const webpack = require("webpack")
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

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
                options: {
                    transpileOnly: true,
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"],
            },
        ],
    },
    optimization: {
        noEmitOnErrors: true,
        namedModules: true,
        removeAvailableModules: false,
        removeEmptyChunks: false,
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            workers: ForkTsCheckerWebpackPlugin.TWO_CPUS_FREE,
        }),
        new webpack.HotModuleReplacementPlugin({}),
    ],
    devServer: {
        hot: true,
        publicPath: '/',
        contentBase: path.join(__dirname, 'static'),
        compress: true,
        port: 8080,
    },
}
