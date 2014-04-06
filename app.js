
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var upload = require('./routes/upload');
var image = require('./routes/image');
var api = require('./routes/api');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon(__dirname + '/public/images/favicon.ico'));
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/upload', upload.form);
app.post('/upload', upload.process);
app.get('/find', image.find);
app.get('/profile-image/:image', image.view);
app.post('/profile-image', image.process);
app.get('/image/:image', image.response);
app.get('/api/profile-image/:hemail', api.response);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
