const { join } = require('path')
const merge = require('webpack-merge')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const common = require('./common')

module.exports = merge(common, {
  mode: 'production',
  entry: join(__dirname, '../../src/client/index'),
  devtool: 'source-map',
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
    new MiniCssExtractPlugin({ filename: '[name].css', chunkFilename: '[id].css' })
  ]
})
