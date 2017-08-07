// Packages
var path = require("path");
var fs = require("fs");
var express = require("express");
var session = require("express-session");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
var MongoStore = require("connect-mongo")(session);

// Imports
var indexRoutes = require('./routes/index');

//Create App //
var app = express();

//View Engine //
app.set("view engine", "html");
app.engine("html", function(path, options, callbacks) {
  fs.readFile(path, 'utf-8', callback);
});

// MONGODB SETUP HERE
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true });
mongoose.connection.on('connected', function() {
  console.log('Connected to MongoDb!');
});

//Middleware (Order Matters!!) //
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: process.env.SECRET || '2cats',
    store: new MongoStore({mongooseConnection: mongoose.connection}),
    resave: true,
    saveUninitialized: true
}));
app.use(express.static(path.join(__dirname,'../client')));

//Routes
app.use('/', indexRoutes);

//Server
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

//Error Handling for other requests
app.use(function(err,req,res,next){
  res.status(err.status || 500);
});

var port = process.env.PORT || 8000;
app.listen(port,  function() {
  console.log("Running on port: %s", port);
});

module.exports = app;
