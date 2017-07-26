var router = require('express').Router();
var User = require("../models/user");
var GitHubApi = require("github");
var _ = require('underscore');

var github = new GitHubApi({
    // optional
    debug: true,
    protocol: "https",
    host: "api.github.com", // should be api.github.com for GitHub
    pathPrefix: "", // for some GHEs; none for GitHub
    headers: {
        "user-agent": "My-Cool-GitHub-App" // GitHub is happy with a unique user agent
    },
    Promise: require('bluebird'),
    followRedirects: false, // default: true; there's currently an issue with non-get redirects, so allow ability to disable follow-redirects
    timeout: 5000
});

//Get repos
router.get('/getRepos', function(req,res) {
  if(!req.user) { return res.status(200).send({}); };

  github.authenticate({
      type: "token",
      token: req.user.accessToken,
  });
  var repos = [];
  github.repos.getAll({
    sort: 'updated',
    per_page: '100' //Later on get the 100 latest or get all using pagination
  })
  .then(function(data){
    repos = data.data;
    return User.findOne({id:req.user.id}).exec();
  })
  .then(function(user){
    user.repos = _.map(repos, function(repository){
      return ({
        name: repository.name,
        fullName: repository.full_name
      });
    });
    user.markModified('repos');
    return user.save();
  })
  .then(function(saved){
    return res.status(200).send(repos);
  })
  .catch(function(err){
    return res.status(200).send({});
  });
});

//Recieve hook payload













module.exports = router;
