var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');
var sass = require('node-sass-middleware');

var app = express();
var compiler = webpack(config);
var stream = process.stdout;
var PORT = process.env.PORT || 3000;

app.disable('x-powered-by');

app.set('port', PORT);

// Boot Strap Font Location
app.use('/fonts/bootstrap', express.static(path.join(
  __dirname,
  'node_modules',
  'bootstrap-sass',
  'assets',
  'fonts',
  'bootstrap'
)));

// Sass Middleware
app.use(sass({
  src: path.join(__dirname, 'app', 'styles'),
  dest: path.join(__dirname, 'app', 'css'),
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

// Only server index.html to the browser
app.get('*', function response(req, res) {
  res.sendFile(path.join(__dirname, 'app/index.html'));
});

module.exports = app;

if (require.main === module) {
  app.listen(PORT, 'localhost', function(err) {
    if (err) {
      stream.write(`Error: ${err}`);
    }

    else {
      stream.write(`Listening at http://localhost:${PORT}\n\n`);
    }
  });
}
