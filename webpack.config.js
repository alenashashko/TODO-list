const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
    return {
        mode: env.mode,
        entry: "./src/index.js",
        output: {
            filename: "bundle.js",
            path: path.resolve(__dirname, "public"),
        },
        devServer: {
            open: true,
            port: 8080,
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                    },
                }
            ],
        },
        resolve: {
            extensions: [".js", ".jsx"]
        },
        plugins: [
            new HtmlWebpackPlugin({
              template: "src/index.html",
              inject: "body",
            })
        ],
        devtool: "source-map"
    };
};
