'use strict';

const commonPaths = require('./common-paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

const config = {
  devtool: 'cheap-module-source-map', // webpack.js.org/configuration/devtoo
  plugins: [
    new HtmlWebpackPlugin({
      template: commonPaths.templatePath,
      inject: true
    }),
    new DashboardPlugin()
  ]
};

module.exports = config;
