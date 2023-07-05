const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    app: './assets/js/app.js',
    style: './assets/css/style.css',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-min.js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin(),
    ],
  },
  resolve: {
    alias: {},
  },
  module: {
    rules: [
      // CSS rules
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      }
      // // JavaScript rules (if needed)
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['@babel/preset-env'],
      //     },
      //   },
      // },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]-min.css',
    }),
  ],
};
