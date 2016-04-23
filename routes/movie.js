var request = require('request');
var express = require('express');
var router = express.Router();

//
// Pulling data for A Night at the Roxbury from omdbapi & filling a
// hash to pass to the template.  We then render the dust template.
//
var movie_handler = function(req, res) {
  var movie = {}

  request.get('http://www.omdbapi.com/?t=a+night+at+the+roxbury&y=&plot=short&r=jsonemail',
	      function(error, response, body) {
		if (!error && response.statusCode == 200) {
		  movie = JSON.parse(response.body);
		  res.render('movie', {
		    movie: movie
		  });
		}
	      });
}

router.get('/', movie_handler);

module.exports = router;
