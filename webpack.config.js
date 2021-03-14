const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');
const PostCSS = require('postcss');
const Sass = require('sass');
const path = require('path');

module.exports = {
  devtool: 'source-map',
  devServer: {
    // contentBase: path.join(__dirname, `../${config.paths.public.root}`),
    watchContentBase: true,
    writeToDisk: true,
    host: '0.0.0.0',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: path.resolve('node_modules/css-loader'),
          },
          {
            loader: path.resolve('node_modules/postcss-loader'),
            options: {
              implementation: PostCSS,
            },
          },
          {
            loader: path.resolve('node_modules/sass-loader'),
            options: {
              implementation: Sass,
            },
          },
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
      files: '**/*.scss',
    }),
  ],
};
