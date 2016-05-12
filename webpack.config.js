'use strict'
const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
require('dotenv').config()
const TARGET = process.env.npm_lifecycle_event
process.env.BABEL_ENV = TARGET

// Extract sass files to css files
var extractTextPlugin = require('extract-text-webpack-plugin')
var extractSass = new extractTextPlugin('css/[name].css')

// PostCSS
const autoprefixer = require('autoprefixer')

const htmlWebpackPlugin = require('html-webpack-plugin')

const CONFIG = {
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss']
  },
  entry: {
    main: [
      path.resolve(__dirname, 'src/client'),
      path.resolve(__dirname, 'src/styles')
    ]
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/[name].js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/, /server/, /test/],
        loader: 'babel'
      },

      {
        test: /\.scss|\.sass$/,
        exclude: /node_modules/,
        loaders: [
          'style',
          'css',
          'postcss',
          'sass'
        ]
      },

      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        exclude: [/node_modules/, /src\/fonts/],
        loaders: [
          'file?hash=sha512&digest=hex&name=images/[name].[ext]',
          'image-webpack?{progressive:true, optimizationLevel: 7, '
            + 'interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
        ]
      },

      {
        test: /\.((woff2?|svg)(\?v=\d+\.\d+\.\d+))?$|(woff2?|svg|jpe?g|png|gif|ico)$/,
        exclude: /src\/images/,
        loader: 'url?name=fonts/[name].[ext]&limit=10000'
      },

      {
        test: /\.((ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9]))|(ttf|eot)$/,
        loader: 'file?name=fonts/[name].[ext]'
      }
    ]
  },
  sassLoader: {},
  postcss: function() {
    return [
      autoprefixer({ browsers: ['last 2 versions'] })
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      hash: true,
      inject: true,
      title: 'React Webpack',
      template: './src/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
}

if (TARGET === 'serve' || !TARGET) {
  module.exports = merge(CONFIG, {
    entry: {
      main: [
        'webpack-hot-middleware/client?path=/__webpack_hmr',
        path.resolve(__dirname, 'src/client'),
        path.resolve(__dirname, 'src/styles')
      ]
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: 'public'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ]
  })
}

else if (TARGET === 'build') {
  CONFIG.module.loaders[1] = {
    test: /\.(sass|scss)$/,
    exclude: /node_modules/,
    loader: extractSass.extract([
      'css',
      'postcss',
      'sass'
    ])
  }

  module.exports = merge(CONFIG, {
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }),
      extractSass,
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  })
}
