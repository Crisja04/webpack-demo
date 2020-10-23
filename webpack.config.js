const path = require('path');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ASSET_PATH = process.env.ASSET_PATH || '/'; // use in public path for terser
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index:'./src/index.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin([])],
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false}),
    new HtmlWebpackPlugin({
      title: 'Caching',
    }),
  ],
};