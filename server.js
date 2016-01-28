var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var path = require('path');

var server = new webpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  contentBase: path.join(__dirname, 'app'),
  hot: true,
  noinfo: true,
  stats: {color: true}
});

server.listen(3000, 'localhost', function (err, result) {
  if (err) console.log(err);
  console.log('Listening at localhost:3000');
});
