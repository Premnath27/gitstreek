var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  id: {
    type: String,
    default: ''
  },
  username: {
    type: String,
    default: ''
  },
  displayName: {
    type: String,
    default: ''
  },
  url: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  },
  accessToken: {
    type: String,
    default: ''
  },
  avatarUrl: {
    type: String,
    default: 'https://s-media-cache-ak0.pinimg.com/236x/30/93/d2/3093d2a63cf2a6d4d1a6a276676d7ae7.jpg?noindex=1'
  },
  location: {
    type: String,
    default: ''
  },
  followers: {
    type: String,
    default: '0'
  },
  following: {
    type: String,
    default: '0'
  },
  repos: {
    type: [],
    default: []
  },
  trackedRepos: {
    type: [],
    default: []
  },
  additions: {
    type: String,
    default: '0'
  },
  deletions: {
    type: String,
    default: '0'
  },
  commits: {
    type: String,
    default: '0'
  }
});

module.exports = mongoose.model('User', userSchema);
