const { join } = require('path')
const Webpackbar = require('webpackbar')

module.exports = {
  output: {
    path: join(__dirname, '../public')
  },

  resolve: {
    extensions: ['.js'],
    modules: [
      join(__dirname, '../node_modules'),
      join(__dirname, '../src')
    ]
  },

  module: {
    rules: [
      {
        test: /\.js$/u,
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
    new Webpackbar()
  ]
}
