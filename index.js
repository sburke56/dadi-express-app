var express = require('express');
var cons = require('consolidate');
var app = express();
var morgan = require('morgan')
var movie = require('./routes/movie');

// Use morgan for http logging; for now just using development which
// is concise & colored.
app.use(morgan('dev'))

// Using consolidate as middleware to render the templates with dust.
app.engine('html', cons.dust);

// For consolidate middleware set the default extension for the dust
// templates to html so it can find them and render them.
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', function(req, res){
  res.send('I implemented a <a href="movie" title="movie route, go there">/movie route</a> Go there.');
});

app.use('/movie', movie);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
