### DADI Express App

The DADI Express App demonstrates the use of Express JS which is a webserver that can be run with node. It serves up a main page at http://localhost:3000 and a [Greatest Movie Ever page](http://localhost:3000/movie) which makes a query for a movie from [The Open Movie Database](www.omdbapi.com).

It is using **dust.js** to render the template and **consolidate** as the middleware to do the compiling of the template.  There is more to be done as far as tuning goes if this was to be put into production making sure to be pre-compiling the templates.

I used Jasmine for unit testing the routes and for HTTP logging there it is using **morgan** and simply logging to the console.

## Installing & Running the App ##

```
npm install
node index.js
```

## Running the Tests ##

I included a Jasmine test which tests the /movie route and checks to make sure the correct movie data is received.

```
npm test
```
