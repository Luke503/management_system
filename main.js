var express = require('express');
var mysql = require('./dbcon.js');

var server = express();
server.use(express.static(__dirname + '/public'));

var port = 5000;
server.listen(port, function() {
    console.log('server listening on port ' + port);
});