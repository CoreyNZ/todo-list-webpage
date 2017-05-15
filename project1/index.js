//disabled 'Update Gutter', Not sure what this means exactly

var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.get('/', function (req, res) { 
	res.send('Hello World! \n');
});

app.listen(port, function () {
console.log('Listening successfully on port 8080!');
});

app.put('/task/create/', function(req, res){
  //console.log(req.body.task);
  console.log("INSERT into todo (item, completed) values ('" + req.body.task + "' , false)")
  var query = client.query("INSERT into todo (item, completed) values ('" + req.body.task + "' , false)", function(error, result){
  	if (error){
  		console.error(error)
  	}
  });
  console.log('creating new task: ' + req.body.task);
  
});