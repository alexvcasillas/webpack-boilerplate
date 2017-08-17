'use strict';

const path = require('path');

module.exports = {
  rootPath: path.resolve('./'),
  srcPath: path.resolve(__dirname, '../', 'src'),
  outputPath: path.resolve(__dirname, '../', 'dist'),
  templatePath: path.resolve(__dirname, '../', 'template/index.html')
};
