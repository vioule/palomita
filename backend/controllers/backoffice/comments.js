const Comment = require('../../models/comment').Comment;

exports.getData = (req,res) => {
  Comment
  .find()
  .populate("parent", "title")
  .exec()
  .then(data=>res.send(data))
}