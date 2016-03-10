var path = require('path');
var express = require('express');

var app = express();
var stream = process.stdout;
var PORT = process.env.PORT || 3000;

app.disable('x-powered-by');

app.set('port', PORT);
app.use(express.static(path.join(__dirname, '..', 'app')));

// Only server index.html to the browser
app.get('*', function response(req, res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});

module.exports = app;

if (require.main === module) {
  app.listen(PORT, function(err) {
    if (err) {
      stream.write(`Error: ${err}`);
    }

    else {
      stream.write(`Listening at http://localhost:${PORT}\n\n`);
    }
  });
}
