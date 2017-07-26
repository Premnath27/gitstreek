var router = require('express').Router();
var User = require("../models/user");

//Get user info if logged in
router.get('/getUser', function(req,res) {
  if(req.user) {
    User.findOne({id: req.user.id}, function(err, user){
      return res.status(200).send(user);
    });
  }else{
    return res.status(200).send({});
  }
});

//Logout
router.get('/logout', function(req, res){
  console.log("Logged out");
  req.logout();
  req.session.destroy(function (err) {
    res.redirect('/'); //Inside a callback… bulletproof!
  });
});

module.exports = router;
