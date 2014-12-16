// Dependencies
var express = require('express');
var mongodb = require('mongodb');

// Setup application
app = express.createServer();

// Middleware config
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({ secret: 'my secret' }));

// Specifiy view options
app.set('view engine', 'jade');

// The following line won't be needed in express 3
app.set('view options', { layout: false });

/** Define routes **/

// Default route
app.get('/', function (req, res) {
	res.render('index', { authenticated: false });
});

// Login route
app.get('/login', function (req, res) {
	res.render('login');
});

// Signup route
app.get('/signup', function (req, res) {
	res.render('signup');
});

// Listen
app.listen(3000);










