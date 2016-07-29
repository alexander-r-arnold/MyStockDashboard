// require packages
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

// declare application
var app = express();
var port = process.env.PORT || 3000;

// declare route
var dashboardRouter = require('./src/routes/dashboardRoutes')();
var userRouter = require('./src/routes/userRoutes')();
var aboutRouter = require('./src/routes/aboutRoutes')();

// declare session and json parser for the application
app.use(express.static(__dirname + 'public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// set views for the ejs engine
app.set('views', './src/views');
app.set('view engine', 'ejs');

// map routers
app.use('/dashboard', dashboardRouter);
app.use('/user', userRouter);
app.use('/about', aboutRouter);

// init '/' route
app.get('/', function(req, res) {
	res.render('index');
});

// declare application to listen
app.listen(port, function(err) {
	console.log('Running server on port ' + port);
});