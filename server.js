var http = require('http');
var port = process.env.PORT || 8000;
var app = require('./config/express');

http.createServer(app).listen(port, function() {
  console.log('Server listen on port: ' + this.address().port);
});
