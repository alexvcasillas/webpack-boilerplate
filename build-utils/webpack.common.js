const commonPaths = require('./common-paths');
const webpack = require('webpack');

const config = {
  entry: commonPaths.srcPath,
  output: {
    filename: '[hash].bundle.js',
    path: commonPaths.outputPath
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: ['transform-runtime']
          }
        }
      },
      {
        test: /\.png/,
        use: [{ loader: 'url-loader', options: { limit: 10000 } }]
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      filename: '[hash].vendors.js',
      minChunks: function(module) {
        // this assumes your vendor imports exist in the node_modules directory
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    })
  ]
};

module.exports = config;
