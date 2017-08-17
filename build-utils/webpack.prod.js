'use strict';

const commonPaths = require('./common-paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BabiliPlugin = require('babili-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
  bail: true,
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: commonPaths.rootPath,
      verbose: true
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: commonPaths.templatePath,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new BabiliPlugin()
  ]
};

module.exports = config;
