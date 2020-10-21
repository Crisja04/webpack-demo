const path = require('path');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ASSET_PATH = process.env.ASSET_PATH || '/'; // use in public path for terser
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: { import: './src/index.js', dependOn: 'shared'},
    another: { import: './src/another-module.js', dependOn: 'shared'},
    shared: 'lodash',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  output: {
    filename: '[name].bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin([])],
    splitChunks: {
      chunks: 'all',
    }
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false}),
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],
};