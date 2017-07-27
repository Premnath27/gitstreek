// Packages
var path = require("path");
var fs = require("fs");
var express = require("express");
var session = require("express-session");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
var MongoStore = require("connect-mongo")(session);
var passport = require("passport");
var GitHubStrategy = require('passport-github2').Strategy;

// Imports
var indexRoutes = require('./routes/index');
var gitRoutes = require('./routes/git_routes');
var User = require("./models/user");

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
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname,'../client')));

//Github Login
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});
passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
    callbackURL: process.env.callbackURL || "http://localhost:3000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {

    var promise = User.findOne({ id: profile.id }).exec();
    promise.then(function(user){
      if(!user){
        var user = new User({
          id: profile.id,
          username: profile.username,
          displayName: profile.displayName,
          url: profile.profileUrl,
          location: profile._json.location
        });
      }
      user.followers = profile._json.followers;
      user.following = profile._json.following;
      user.avatarUrl = profile._json.avatar_url;
      user.email = (profile.emails && profile.emails[0].value) || '';
      user.accessToken = accessToken;
      return user.save();
    })
    .then(function(saved) {
      console.log("Logged in");
      return done(null, saved);
    })
    .catch(function(err) {
      return done(null, null);
    });

  }
));

app.get('/auth/github',
  passport.authenticate('github', { scope: [ 'repo','user:email', 'read:org', 'read:repo_hook', 'write:repo_hook'] }),
  function(req, res){
 });

app.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
});

//Routes
app.use('/', indexRoutes);
app.use('/git/', gitRoutes);

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
