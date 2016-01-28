var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var app = path.join(__dirname, 'app');

module.exports = {
  entry: {
    app: [
      'webpack-hot-middleware/client',
      './app/scripts/main'
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!postcss!sass'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel']

      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  },
  sassLoader: {
    includePaths: [path.join(__dirname, 'bower_components')]
  },
  postcss: function () {
    return {
      defaults: [autoprefixer],
      cleaner: [autoprefixer({ browsers: []})]
    };
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(['app', 'vendor'], 'js/[name].js'),
    new webpack.HotModuleReplacementPlugin()
  ]
};
