var request = require("request");

var base_url = "http://localhost:3000/"

describe("Dadi Express Test App", function() {
  describe("GET localhost/movie", function() {
    it("body contains the string \"Roxbury\"", function(done) {
      request.get(base_url+'movie', function(error, response, body){
	expect(body).toContain("Roxbury");
	done();
      });
    });
  });
});
