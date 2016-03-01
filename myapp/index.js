var express = require('express');
var app = express();

// set public static files
app.use(express.static('public'));
// request/response objects
app.get('/', function(req, res) {
  res.sendfile('index.html');
});

//add another route
app.get('/about', function(req,res){
  res.sendfile('about.html');
});

// app needs to listen on port 3000 and when something comes in, we will console log it.
app.listen(3000, function() {
  console.log('Example app listening on port 3000.');
});
