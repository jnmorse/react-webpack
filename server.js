var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');
var sass = require('node-sass-middleware');

var app = express();
var router = express.Router();
var compiler = webpack(config);

var PORT = process.env.PORT || 3000;

app.use(sass({
  src: path.join(__dirname, 'app', 'styles'),
  dest: path.join(__dirname, 'app', 'css'),
  // response: true,
  debug: false,
  sourceMap: true,
  outputStyle: 'compressed',
  includePaths: [path.join(__dirname, 'node_modules')],
  prefix: '/css'
}));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/css', express.static(path.join(__dirname, 'app', 'css')));
app.use(express.static(path.join(__dirname, 'app')));
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', function response(req, res) {
  res.sendFile(path.join(__dirname, 'app/index.html'));
});

app.listen(PORT, 'localhost', function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});
