const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');
const path = require('path');
const config = require('./config');

module.exports = {
  mode: 'development',
  // mode: 'production',
  devtool: 'source-map',
  // entry: {
    // pl: `${config.paths.assets.css}pattern-scaffolding.scss`,
    // style: `${config.paths.assets.css}style.scss`,
    // main: `${config.paths.assets.js}entry.js`,
  // },
  output: {
    path: path.join(__dirname, config.paths.public.assets),
    publicPath: '',
    // assetModuleFilename: 'assets/[name][ext][query]'
  },
  devServer: {
    contentBase: path.join(__dirname, `../${config.paths.public.root}`),
    watchContentBase: true,
    writeToDisk: true,
    host: '0.0.0.0',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // or 'style-loader',
          // 'style-loader',
          'css-loader',
          'postcss-loader',
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     postcssOptions: {
          //       config: path.resolve(__dirname, 'postcss.config.js'),
          //     },
          //   },
          // },
          'sass-loader',
        ],
      },
      {
        test: /\.(woff|woff2)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new ESLintPlugin(),
    new MiniCssExtractPlugin(),
    new StylelintWebpackPlugin({
      context: 'src',
    }),
  ],
};
