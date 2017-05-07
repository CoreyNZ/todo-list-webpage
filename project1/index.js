var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.get('/', function (req, res) { 
	res.send('Hello World! \n');
});

app.listen(port, function () {
console.log('Listening successfully on port 8080!');
});