const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient

app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')

MongoClient.connect('mongodb://ezakuroy:Yamin7374!!!@ds119350.mlab.com:19350/ezaku', (err, client) => {
	if (err) return console.log(err)
	db = client.db('ezaku')
	app.listen(3001, function() {
		console.log('listening on 3001');
	});
})

app.get('/posts', function(req, res) {
//	res.sendFile(__dirname + '/index.html')
	var cursor = db.collection('posts').find().toArray((err, result) =>{
		if(err) return console.log(err)

		//res.render('index.ejs', {posts: result})
		console.log('hit');	

		res.setHeader('Content-Type', 'application/json');
		res.send(result);
	})
});

app.get('/admin', function(req, res) {
	res.sendFile(__dirname + '/admin.html')

});

app.post('/blogpost', (req, res) => {
	db.collection('posts').save(req.body, (err, result) => {
		if (err) return console.log(err)

		console.log('saved to database')
		res.redirect('/')
	})
})
