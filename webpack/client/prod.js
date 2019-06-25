const { join } = require('path');
const merge = require('webpack-merge');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = require('../../package.json');
const common = require('./common');
const htmlWebpackPluginOptions = require('./html-webpack-plugin-options');

const exp = /https?:\/\/\S+(\/\S+)/u;

const result = exp.exec(config.homepage);

const [, publicPath] = result;

module.exports = merge(common, {
  mode: 'production',
  entry: join(__dirname, '../../src/client/index'),
  devtool: 'source-map',
  output: {
    publicPath: publicPath || '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/u,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [new TerserJSPlugin(), new OptimizeCSSAssetsPlugin()]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebpackPlugin(htmlWebpackPluginOptions.prod),
    new CleanWebpackPlugin()
  ]
});
