var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require('./src/server/routes');

var PORT = process.env.Port || 3000;

app.use(bodyParser.json());

routes(app);

app.all('/*', function(req, res) {
    res.send('\
			<!DOCTYPE html>\
			<html lang="en">\
				<head>\
					<meta charset="UTF-8" />\
					<title>Document</title>\
					<base href="/"> </base>\
				</head>\
				<body>\
					<div ui-view></div>	\
					<script src="bundle.js"></script>\
				</body>\
			</html>\
		');
});

app.listen(PORT, function() {
    console.log('server running on port 3000');
})
