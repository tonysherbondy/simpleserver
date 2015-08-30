var express = require('express');
var path = require('path');
//var firebaseApi = require('./firebaseApi');

var app = express();

var publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

// views is directory for all template files
var viewsPath = path.resolve(__dirname, 'views');
app.set('views', viewsPath);
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

var serverType = process.env.NODE_ENV === 'production' ? 'pro' : 'dev';
var server = require('./server/' + serverType + '.js');
server(app);

