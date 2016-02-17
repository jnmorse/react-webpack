var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var app = path.join(__dirname, 'app');

module.exports = {
  entry: {
    app: [
      'webpack-hot-middleware/client',
      path.join(__dirname, 'app', 'scripts', 'main')
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
    // publicPath: 'http://localhost:3000/'
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/, /server.js/],
        loaders: ['babel']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', ',jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  devServer: {
    hot: true,
    proxy: {
      '*': 'http://localhost:3000'
    }
  }
};
