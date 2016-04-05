var path = require('path')
var express = require('express')
var webpack = require('webpack')
var config = require('../webpack.config')

require('dotenv').config()

var app = express()
app.disable('x-powered-by')

var dev = process.env.NODE_ENV === 'development'

if (dev) {
  var compiler = webpack(config)

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }))

  app.use(require('webpack-hot-middleware')(compiler))
}

app.use(express.static(path.resolve(__dirname, '../public')))
app.use(express.static(path.resolve(__dirname, '../bower_components')))


app.get('*', function response(req, res) {
  res.sendFile(path.resolve(__dirname, '../public/index.html'))
})

module.exports = app
