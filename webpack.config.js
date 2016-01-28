var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var app = path.join(__dirname, 'app');

module.exports = {
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './app/scripts/main'
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist',
    filename: './[name].js',
    chunkFilename: './[id].js'
  },
  devtool: 'eval',
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'source-map-loader'
      }
    ],
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!postcss!sass'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']

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
