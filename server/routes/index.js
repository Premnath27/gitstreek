var router = require('express').Router();
var Question = require("../models/question");

router.post('/createQuestion', (req,res)=>{
  req.body.options.pop();
  var newQuestion = new Question({
    question: req.body.question,
    options: req.body.options
  });
  newQuestion.save((err,saved) => {
    if(err) { res.status(400).send("Err??") }
    return res.status(200).send(saved._id);
  });
});

router.post('/updateChoices', (req,res) => {
  Question.findById(req.body.id, (err,found) => {
    if(err) { return res.status(400).send("err") };
    found.options[req.body.idx].votes++;
    found.markModified("options");
    found.save((err,saved) => {
      if(err) { return res.status(400).send("err") };
      return res.status(200).send(saved.options);
    })
  });
})

router.get('/getQuestion', (req,res)=>{
  Question.findById(req.query.id, (err,found) => {
    if(err) { return res.status(400).send({question: {} })}
    return res.status(200).send(found);
  });
});

module.exports = router;
