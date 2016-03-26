require('dotenv').config();

var app = require('./server');
var port = process.env.PORT || 5000;
var stdout = process.stdout;

app.listen(port, function(error) {
  if (error) {
    stdout.write('Error: ' + error + '\n\n');
  }

  else {
    stdout.write('Listen on port ' + port + '\n\n');
  }
});
