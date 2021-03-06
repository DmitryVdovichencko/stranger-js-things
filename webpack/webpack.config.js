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
      loaders.StyleLoader,
    ]
  },
  mode: 'development',
  watch: true,
  output: {
    path: path.resolve(__dirname, "../"),
    filename: "js/[name].bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "../"),
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