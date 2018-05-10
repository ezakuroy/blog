const express = require('express');
const app = express();

app.listen(3000, function() {
	console.log('test');
});

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html')
});
