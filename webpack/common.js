const { join } = require('path')
const Webpackbar = require('webpackbar')
const config = require('../package.json')

const exp = /https?:\/\/\S+(\/\S+)/u

const result = exp.exec(config.homepage)

const [, publicPath] = result

module.exports = {
  output: {
    path: join(__dirname, '../public'),
    publicPath: publicPath || '/'
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
