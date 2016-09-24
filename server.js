var express = require('express');
var app = express();
var port = 3000;

var middleware = {
	requireAuthentication: function(req, res, next){
		console.log('private route is here!');
		next();
	},
	logger: function(req, res, next){
		var date = new Date().toString();
		console.log('Request: '+ date + ' ' + req.method + ' ' + req.originalUrl);
		next();
	}
};

app.use(middleware.logger);

// app.use(middleware.requireAuthentication);

app.get('/about', middleware.requireAuthentication, function(req, res) {
    res.send('About us, nigger');
});

app.get('/quit', function(req,res) {
  res.send('closing..');
  app.close();
});

app.use(express.static(__dirname + "\\public"));

app.listen(port, function(){
	console.log('Express server started! on : '+ port);
});
