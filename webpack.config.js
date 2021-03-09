const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

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
    },
    plugins: [
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
      env.mode === "production"
        ? new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
            reportFilename: path.resolve(__dirname, "reports", "bundle.html")
          })
        : null,
    ].filter(Boolean),
    devtool: "source-map",
  };
};
