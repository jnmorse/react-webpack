/* eslint-disable import/no-extraneous-dependencies */
const { resolve } = require('path')
const express = require('express')

const app = express()
app.disable('x-powered-by')

const dev = process.env.NODE_ENV === 'development'

if (dev) {
  /* eslint-disable global-require */
  require('dotenv').config()

  const webpack = require('webpack')
  const config = require('../webpack/client/dev')
  const { publicPath, path } = config.output

  const compiler = webpack(config)
  const history = require('connect-history-api-fallback')

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath
  }))
  app.use(require('webpack-hot-middleware')(compiler))

  app.use(history())

  app.use(publicPath, express.static(path))
  /* eslint-enable global-require */
} else {
  app.use(express.static(resolve(__dirname, '../public')))

  app.get('*', (req, res) => {
    res.sendFile(resolve(__dirname, '../public/index.html'))
  })
}

module.exports = app
