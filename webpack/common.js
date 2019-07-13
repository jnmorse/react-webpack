const { join } = require('path');
const Webpackbar = require('webpackbar');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  output: {
    path: join(__dirname, '../build')
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [join(__dirname, '../node_modules'), join(__dirname, '../src')]
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/u,
        exclude: /node_modules/u,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },

  plugins: [
    new Webpackbar(),
    new CopyPlugin([
      { from: 'public/images', to: 'static/images' },
      { from: 'public/manifest.json', to: 'manifest.json' }
    ])
  ]
};
