const JSLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env']
    }
  }
};

const ESLintLoader = {
  test: /\.js$/,
  enforce: 'pre',
  exclude: /node_modules/,
  use: {
    loader: 'eslint-loader',
    options: {
      configFile: __dirname + '/.eslintrc'
    },
  }
};

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const CSSLoader = {
  test: /\.css$/,
  exclude: /node_modules/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        
      }
    },
    {
      loader: 'css-loader',
      options: {importLoaders: 1},
    },
    {
      loader: 'postcss-loader',
      options: {
        config: {
          path: __dirname + '/postcss.config.js'
        }
      },
    },
  ],
};
const FontsLoader = {
          
  test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
    use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
          outputPath: 'fonts/'
      }
    },
  ],
};
const JSONLoader = {
    type: 'javascript/auto',
    test: /assets\/.+\.json/,
    exclude: /node_modules/,
    use: [
        {
          loader: 'file-loader',
          options: {
              name: "./[name].[ext]"
          }
        }
    ]
};
module.exports = {
  JSLoader: JSLoader,
  ESLintLoader: ESLintLoader,
  CSSLoader: CSSLoader,
  FontsLoader: FontsLoader,
  JSONLoader: JSONLoader,
};