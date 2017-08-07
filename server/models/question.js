var mongoose = require('mongoose');

var questionSchema = new mongoose.Schema({
  question: {
    type: String,
    default: ''
  },
  options: {
    type: [],
    default: []
  }
});

module.exports = mongoose.model('Question', questionSchema);
