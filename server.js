var bodyParser = require('body-parser');
var express = require('express');
var fs = require('fs');
var morgan = require('morgan');
var app = express();

var port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
// app.use(morgan('combined'));

app.post('/subscribe', function (req, res) {
  var data = '\r\n' + new Date() + ' ' + req.body.email;

  fs.appendFile('subscribers.txt', data, (err) => {
    if (err) throw err;
  });

  res.send('New subscriber: ' + req.body.email);
});

app.listen(port, function() {
    console.log('App is running on http://localhost:' + port);
});
