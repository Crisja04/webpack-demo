const path = require('path');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ASSET_PATH = process.env.ASSET_PATH || '/';
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  output: {
    filename: '[name].bundle.js',
    publicPath: `.${ASSET_PATH}`,
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.toml$/,
        type: 'json',
        parser: {
          parse: toml.parse
        }
      },
      {
        test: /\.yaml$/,
        type: 'json',
        parser: {
          parse: yaml.parse
        }
      },
      {
        test: /\.json5$/,
        type: 'json',
        parser: {
          parse:json5.parse
        }
      }
    ],
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin([])],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],
};