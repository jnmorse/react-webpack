/* eslint-disable import/no-extraneous-dependencies */
const { resolve } = require('path')
const express = require('express')
const history = require('connect-history-api-fallback')
const config = require('../webpack')

const { publicPath, path } = config.output

const app = express()
app.disable('x-powered-by')

const dev = process.env.NODE_ENV === 'development'

if (dev) {
  /* eslint-disable global-require */
  require('dotenv').config()

  const webpack = require('webpack')

  const compiler = webpack(config)
  app.use(history())

  app.use(
    require('webpack-dev-middleware')(compiler, {
      noInfo: true,
      publicPath
    })
  )
  app.use(require('webpack-hot-middleware')(compiler))

  app.use(publicPath, express.static(path))
  /* eslint-enable global-require */
} else {
  app.use(publicPath, express.static(resolve(__dirname, '../public')))

  app.use(history(), (req, res) => {
    res.sendFile(resolve(__dirname, '../public/index.html'))
  })
}

module.exports = app
