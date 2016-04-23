### DADI Express App

The DADI Express App demonstrates the use of Express JS which is a webserver that can be run with node. It serves up a main page at http://localhost:3000 and a [Greatest Movie Ever page](http://localhost:3000/movie) which makes a query for a movie from [The Open Movie Database](www.omdbapi.com).

It is using **dust.js** to render the template and **consolidate** as the middleware to do the compiling of the template.  There is more to be done as far as tuning goes if this was to be put into production making sure to be pre-compiling the templates.

I used Jasmine for unit testing the routes and for HTTP logging it is using **morgan** and simply logging to the console.

## Installing & Running the App ##

```
git clone https://github.com/sburke56/dadi-express-app.git
cd dadi-express-app
npm install
node index.js
```

## Running the Tests ##

I included a Jasmine test which tests the /movie route and checks to make sure the correct movie data is received.

```
npm test
```

## Code Explanation ##
The index.js file simply sets up all the dependencies for the app and sets up the routes.  The routes are setup so the routes directory would contain any routes that hang off the base URL.  So all the /movie routes would be in the /routes/movie.js file.

As for the data feed omdbapi was open and I didn't have to worry about distributing an API key to any consumers of this app or possibly checking it into source control which isn't a good idea.  That data is passed to the dust template and it simply outputs an <ul> element.

If you have any problems running this sample here's my email <steve.burke.56@gmail.com>
