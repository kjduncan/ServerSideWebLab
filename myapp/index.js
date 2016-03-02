var express = require('express');
var bodyParser = require('body-parser');
var app = express();
global.reasons = [
  {reason: 'My mom loves me'}
];

app.set('view engine', 'ejs');

// set public static files
app.use(express.static('public'));
// include body parser to read POST requests
app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());
// request/response objects
// app.get('/', function(req, res) {
//   res.sendfile('index.html');
// });

//use res.render to load an ejs view file
app.get('/', function(req,res){
  var friends = [
    { name: 'Chandler Bing'},
    { name: 'Rachel Green'},
    { name: 'Ross Geller'},
    {name: 'Joey Tribiani'},
    {name: 'Monice Geller'},
    {name: 'Phoebe Buffay'}
  ];

  var tagline = "Of course there, they just call it food.";

  res.render('pages/index', {
    friends: friends,
    tagline: tagline
  });
});

//add another route
// app.get('/about', function(req,res){
//   res.sendfile('about.html');
// });

app.get('/about', function(req,res) {
  res.render('pages/about', {
    reasons: reasons
  });
});
// Accept input from the About form
app.post('/about', function(req,res) {
    console.log(req.body.myReason);
    var theReason = {
      reason: req.body.myReason
    }
    global.reasons.push(theReason);
    console.log(global.reasons);
    res.render('pages/about', {
      reasons: global.reasons
    });
});

// input form
app.get('/contact', function(req,res) {
  res.sendfile('/pages/contact.html');
});

//form submission
app.post('/contact', function(req,res) {

});

// app needs to listen on port 3000 and when something comes in, we will console log it.
app.listen(3000, function(req,res) {
  console.log('Example app listening on port 3000.');
});
