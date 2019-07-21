const merge = require('webpack-merge');
const common = require('./common');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHTMLPlugin = require('interpolate-html-plugin');
const htmlWebpackPluginOptions = require('./html-webpack-plugin-options');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',

  output: {
    filename: 'static/js/[name].js',
    chunkFilename: 'static/js/[name].chunk.js',
    publicPath: '/'
  },

  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },

  stats: 'minimal',
  devtool: 'cheap-module-eval-source-map',

  module: {
    rules: [
      {
        test: /\.css$/u,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]--[hash:base64:5]',
                context: path.resolve(__dirname, '../../src')
              }
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
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin(htmlWebpackPluginOptions.dev),
    new InterpolateHTMLPlugin({
      PUBLIC_URL: ''
    })
  ]
});
