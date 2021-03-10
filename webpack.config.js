const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { InjectManifest } = require("workbox-webpack-plugin");

module.exports = (env) => {
  return {
    mode: env.mode,
    entry: "./src/index.tsx",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "public"),
    },
    devServer: {
      open: true,
      port: 8080,
      writeToDisk: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|tsx?)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      alias: {
        src: path.resolve(__dirname, "src"),
      },
    },
    plugins: [].concat(
      [
        new HtmlWebpackPlugin({
          template: "src/index.html",
          inject: "body",
        }),
        new ForkTsCheckerWebpackPlugin({
          typescript: {
            diagnosticOptions: {
              semantic: true,
              syntactic: true,
            },
            mode: "write-references",
          },
        }),
      ],
      env.mode === "production"
        ? [
            new InjectManifest({
              swSrc: path.resolve(__dirname, "./src/sw.js"),
              swDest: "sw.js",
            }),

            new BundleAnalyzerPlugin({
              analyzerMode: "static",
              openAnalyzer: false,
              reportFilename: path.resolve(__dirname, "reports", "bundle.html"),
            }),
          ]
        : []
    ),
    devtool: "source-map",
  };
};
