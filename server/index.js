const path = require('path')
const express = require('express')
const webpack = require('webpack')
const config = require('../webpack.config')
const history = require('connect-history-api-fallback')

require('dotenv').config()

const app = express()
app.disable('x-powered-by')

const dev = process.env.NODE_ENV === 'development'

if (dev) {
  const compiler = webpack(config)

  app.use(history())

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }))

  app.use(require('webpack-hot-middleware')(compiler))
}

else {
  app.use(express.static(path.resolve(__dirname, '../public')))

  app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, '../public/index.html'))
  })
}

module.exports = app
