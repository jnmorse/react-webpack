/* eslint-disable no-console */
const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const express = require('express');
const path = require('path');

process.env.NODE_ENV = 'development';
process.env.BABEL_ENV = 'development';

const webpackConfig = require('./');

const compiler = webpack(webpackConfig);

const devServer = new WebpackDevServer(compiler, {
  clientLogLevel: 'warn',
  noInfo: true,
  contentBase: [path.resolve(__dirname, '../build')],
  hot: true,
  compress: true,
  publicPath: '/',
  historyApiFallback: { disableDotRule: true },
  open: true,
  after: (app, server) => {
    app.use('/static', express.static(`${__dirname}/public`));
    app.get('/manifest.json', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'public/manifest.json'));
    });
  }
});

const PORT = 3000;
const HOST = '0.0.0.0';

devServer.listen(PORT, HOST, error => {
  if (error) {
    console.log(error.message);
  }

  console.log(`App: http://localhost:${PORT}/`);
});
