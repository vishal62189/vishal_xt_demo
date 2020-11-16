const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config');

// webpack configuration for dev environment
const config = {
  mode: 'development',
  entry: './src/client/client.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  devtool: 'inline-source-map'
};
module.exports = merge(common, config);
