const Comment = require('../../models/comment').Comment;

exports.getData = (req,res) => {
  Comment
  .find()
  .populate("parent")
  .exec()
  .then(data=>res.send(data))
};

exports.getConversation = (req,res) => {
  Comment
  .findOne({_id: req.query.id})
  .populate({path:"reponse", populate: {path:"parent"}})
  .populate("parent")
  .exec()
  .then(data=>{
    data.type === "reponse" ?
    Comment.findOne({reponse: { $all: [data._id]}})
    .populate({path:"reponse", populate: {path:"parent"}})
    .populate("parent")
    .exec()
    .then(data=>res.send(data)) :
    res.send(data)
  })
};