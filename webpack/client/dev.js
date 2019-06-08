const { join } = require('path')
const merge = require('webpack-merge')
const common = require('./common')
const webpack = require('webpack')

module.exports = merge(common, {
  mode: 'development',
  output: {
    publicPath: '/'
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  entry: [
    'webpack-hot-middleware/client',
    join(__dirname, '../../src/client/index')
  ],
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
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
})
