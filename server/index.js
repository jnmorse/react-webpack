var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('../webpack.config.dev');

require('dotenv').config();

var app = express();
app.disable('x-powered-by');

var dev = process.env.NODE_ENV === 'development';

if (dev) {
  var compiler = webpack(config);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('*', function response(req, res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});

module.exports = app;
