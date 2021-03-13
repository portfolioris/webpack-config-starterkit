const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');

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
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
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
      files: '**/*.scss',
    }),
  ],
};
