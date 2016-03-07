var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    client: path.join(__dirname, '..', 'client')
  },
  output: {
    path: path.join(__dirname, '..', 'app', 'js'),
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
    new webpack.NoErrorsPlugin()
  ]
};
