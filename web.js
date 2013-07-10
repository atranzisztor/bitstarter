var express = require('express');
var fs = require('fs');
var Buffer = require('buffer');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var s = fs.readFile("index.html");
  var buffer = new Buffer(s, "utf-8");
  response.send(buffer.toString("utf-8"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
