// const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('../index');
// const config = require('./config');

const webpackConfig = merge(baseConfig, {
  entry: './test/src/index.js',
  output: {
    // path: path.join(__dirname, config.paths.public.assets),
    publicPath: '',
    // assetModuleFilename: 'assets/[name][ext][query]',
  },
});

module.exports = webpackConfig;
