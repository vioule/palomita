const Comment = require('../../models/comment').Comment;
const Article = require('../../models/article').Article;

exports.getData = (req,res) => {
  Comment
  .find()
  .populate("reponse")
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

exports.deleteComments = (req,res) => {
  Comment
  .deleteMany({_id: {$in: req.query.ids}})
  .then(()=>{
    Article
    .updateOne({_id: req.query.parentID}, {$pull: {comments: {$in: req.query.ids}}})
    .then((data)=>res.send(data))
  })
};

exports.createAnswer = (req,res) => {
  let answer = new Comment(req.body.answer);
  answer
  .save()
  .then((data)=>{
    if (req.body.type=="comment") { //si le commentaire parent est de type comment
      Comment
      .updateOne({_id: req.body.id}, {$push: {reponse: data._id}}) //update de son array reponse ajout à la fin de la reponse
      .then(()=>{
        Article
        .findOne({_id: answer.parent._id}) //je trouve l'article correspondant à la conversation
        .then((data)=>{
          Article
          .updateOne({_id: answer.parent._id}, {$push: {comments: {$each: [answer._id], $position: data.comments.indexOf(req.body.id)+1}}}) //update de son array comments ajout de la reponse juste après le commentaire parent
          .then((data)=>res.send(data))
        })
      })
    }else { //si le commentaire parent est de type reponse
      Comment
      .findOne({reponse: req.body.id}) //je trouve le commentaire qui possede le commentaire parent dans ses reponses
      .then((data)=>{
        Comment
        .updateOne({reponse: req.body.id}, {$push: {reponse: {$each: [answer._id], $position: data.reponse.indexOf(req.body.id)+1}}}) //update de son array reponse ajout de la reponse juste après le commentaire parent
        .then(()=>{
          Article
          .findOne({_id: answer.parent._id}) //je trouve l'article correspondant à la conversation
          .then((data)=>{
            Article
            .updateOne({_id: answer.parent._id}, {$push: {comments: {$each: [answer._id], $position: data.comments.indexOf(req.body.id)+1}}}) //update de son array comments ajout de la reponse juste après le commentaire parent
            .then((data)=>res.send(data))
          })
        })
      })
    }
  })
};