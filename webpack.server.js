const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');
const common = require('./webpack.config.js');
// webpack configuration for server side rendering
const config = {
  target: 'node',
  mode: 'production',
  entry: './src/server/index.js',
  externals: [webpackNodeExternals()],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  }
};

module.exports = merge(common, config);
