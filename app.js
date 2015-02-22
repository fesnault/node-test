var express = require('express');

var app = express();

app.set('views', './views');
app.set('view engine','jade');

// Create a route for the home path
app.get('/', function(req, res) {
	res.render('index', {
		title: 'My Page'
	});
});

var port = process.env.PORT || 3000;

app.listen(port);
console.log('Express server listening on port 3000...');