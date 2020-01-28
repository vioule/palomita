const Comment = require('../../models/comment').Comment;

exports.getData = (req,res) => {
  Comment
  .find()
  .populate("parent", "title")
  .exec()
  .then(data=>res.send(data))
};

exports.getConversation = (req,res) => {
  Comment
  .findOne({_id: req.query.id})
  .populate("reponse")
  .populate("parent")
  .exec()
  .then(data=>res.send(data))
};