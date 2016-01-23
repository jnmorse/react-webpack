var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './app/scripts/main.js',
    style: './app/styles/styles.js',
    vendor: ['react', 'react-dom', 'jquery']
  },
  output: {
    path: './build',
    filename: './[name].js',
    chunkFilename: './[id].js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ],
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!postcss!sass')
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      }
    ]
  },
  postcss: function () {
    return {
      defaults: [autoprefixer],
      cleaner: [autoprefixer({ browsers: []})]
    };
  },
  plugins: [
    new ExtractTextPlugin('style', 'css/[name].css'),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'js/vendor.js'),
    new HtmlWebpackPlugin({
      title: 'ReactStarter',
      template: 'app/index.html',
      inject: 'body'
    })
  ]
};
