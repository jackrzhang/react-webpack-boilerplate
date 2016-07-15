// const webpack = require('webpack');
const path = require('path');
// const fs = require('fs');

const BUILD_DIR = path.join(__dirname, '..', 'build/');
const SRC_DIR = path.join(__dirname, '..', 'src/');

const config = {
  HOT_PORT: 8080,
  name: 'development',
  entry: [
    'babel-polyfill',
    `${SRC_DIR}index.js`
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.js$|.jsx$/,
        include: SRC_DIR,
        loaders: ['babel']
      }
    ]
  }
};

module.exports = config;
