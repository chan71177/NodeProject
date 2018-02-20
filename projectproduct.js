var http = require('http');
var fs = require('fs');
var fileToServe = 'projectproduct.json'
var server = http.createServer(function (req, res) {
  fs.readFile('projectproduct.json', function(err, data) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(data);
    res.end();
  });
}).listen(8080); 