var webpack = require('webpack');
var path = require('path');
require('dotenv').config();

module.exports = {
  entry: {
    'js/app': [
      'webpack-hot-middleware/client',
      path.resolve(__dirname, 'src/client')
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: [/node_modules/, /server/, /test/],
      loader: 'babel',
      query: {
        presets: ['react-hmre']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', ',jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};
