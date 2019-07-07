const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');

module.exports = {
  entry: ["./src/js/app.js"],
  module: {
    rules: [
      loaders.CSSLoader,
      loaders.JSLoader,
      loaders.ESLintLoader,
      loaders.FontsLoader,
      loaders.JSONLoader,
    ]
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "js/[name].bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    inline: true,
    port: 3000,
    // historyApiFallback: true,
    hot: true
  },
  plugins: [
    plugins.MiniCssExtractPlugin,
    plugins.HtmlWebpackPlugin,
  ],
};