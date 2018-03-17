var port = 34517;
var title = "CS290 Week7 Homework: GET and POST Checker";
var keywords = "OSU,CS290,GET,POST,Checker"; 
var author = "Edmund";

var express = require('express');
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');

var app = express();

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('port', port);

app.get('/main', function(req,res){
  var params = [];
  for (var i in req.query) {
    var obj = { "key": i, "value": req.query[i] };
    params.push(obj);
  }
  var input = {};
  input.title = title;
  input.keywords = keywords;
  input.author = author;
  input.data = params;
  res.render('get', input);
});

app.post('/main', function(req,res){
  var params = [];
  for (var i in req.body) {
    var obj = { "key": i, "value": req.body[i] };
    params.push(obj);
  }
  var input = {};
  input.title = title;
  input.keywords = keywords;
  input.author = author;
  input.data = params;
  res.render('post', input);
});

app.use(function(req,res){
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.send('500 - Server Error');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://flip3.engr.oregonstate.edu:' + app.get('port') + '; press Ctrl-C to terminate.');
});
