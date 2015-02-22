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

app.listen(3000);
console.log('Express server listening on port 3000...');