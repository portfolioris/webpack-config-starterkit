const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('../index');
// const config = require('./config');

const webpackConfig = merge(baseConfig, {
  entry: './test/src/index.js',
  // entry: {
  //   pl: `${config.paths.assets.css}pattern-scaffolding.scss`,
  //   style: `${config.paths.assets.css}style.scss`,
  //   main: `${config.paths.assets.js}entry.js`,
  // },
  output: {
    // path: path.join(__dirname, config.paths.public.assets),
    publicPath: '',
    // assetModuleFilename: 'assets/[name][ext][query]',
  },
});

module.exports = webpackConfig;
