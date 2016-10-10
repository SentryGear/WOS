var express = require('express');
var path = require('path');

var app = express();

var staticPath = path.join(__dirname, '/public');
app.use(express.static(staticPath));

app.listen(8080, function() {
  console.log('listening');
});
