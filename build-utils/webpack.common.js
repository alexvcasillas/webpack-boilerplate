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
      minChunks: function(module, count) {
        // This prevents stylesheet resources with the .css or .scss extension
        // from being moved from their original chunk to the vendor chunk
        if (module.resource && /^.*\.(css|scss)$/.test(module.resource)) {
          return false;
        }
        // this assumes your vendor imports exist in the node_modules directory
        // and appears at least in two files
        return (
          module.context &&
          module.context.indexOf('node_modules') !== -1 &&
          count === 2
        );
      }
    })
  ]
};

module.exports = config;
