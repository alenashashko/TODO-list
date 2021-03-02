const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

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
        optimization: {
            minimizer: [
              new TerserPlugin(),
              new CssMinimizerPlugin(),
            ]
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                    },
                },
                {
                    test: /\.(css)$/i,
                    use: [MiniCssExtractPlugin.loader, {
                      loader: "css-loader",
                      options: {
                        url: false,
                      }
                    }],
                },
            ],
        },
        resolve: {
            extensions: [".js", ".jsx"]
        },
        plugins: [
            new MiniCssExtractPlugin(),
            new HtmlWebpackPlugin({
              template: "src/index.html",
              inject: "body",
            })
        ],
        devtool: "source-map"
    };
};