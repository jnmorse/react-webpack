var webpack = require('webpack');
var path = require('path');
require('dotenv').config();

var build = {
  entry: {
    'js/app': path.resolve(__dirname, '../src/client')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: [/node_modules/, /server.js/],
      loaders: ['babel']
    }]
  },
  resolve: {
    extensions: ['', '.js', ',jsx']
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
};

if (process.env.NODE_ENV === 'production') {
  build.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  );
}

module.exports = build;
