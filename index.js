var express = require('express');
var cons = require('consolidate');
var app = express();
var morgan = require('morgan')
var request = require('request')

// Set up http logging; for now just using development which is
// concise & colored.
app.use(morgan('dev'))

// assign the dust engine to .html files
app.engine('html', cons.dust);

// set .html as the default extension
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', function(req, res){
  res.render('index', {
    title: 'Consolidate.js'
  });
});

app.get('/movie', function(req, res){
  var movie = {}

  request.get('http://www.omdbapi.com/?t=snake+eyes&y=&plot=short&r=jsonemail',
	      function(error, response, body) {
		if (!error && response.statusCode == 200) {
		  movie = JSON.parse(response.body);
		  console.log(movie);

		  res.render('movie', {
		    title: 'Movie',
		    language: "english",
		    movie: movie
		  });
		}
	      });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
