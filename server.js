//jshint esversion:6

const express = require("express");

const app = express();

app.get('/', function(request, response) {
  response.send("<h1>Hello world!</h1>");
});

app.get('/contact', function(request, response) {
  response.send("<h1>Octavian Soldea!</h1>");
});

app.get('/about', function(request, response) {
  response.send("<h1>This site is maintained by Soldea Family.</h1>");
});

app.get('/hobbies', function(req, res) {
  res.send("<ul><li>Coffee</li><li>Code</li><li>Beer</li></ul>");
})

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
