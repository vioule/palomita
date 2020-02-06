const Article = require('../../models/article').Article;
const Comment = require('../../models/comment').Comment;
const getComments = require('./comments').getData;

exports.getData = (req,res) => {
  Article.find().then(data=>res.send(data))
}

exports.deleteArticle = (req,res) => {
  Article
  .deleteOne({_id: req.query.id})
  .then(()=>{
    Comment.deleteMany({_id: {$in: req.query.comments}})
    .then(()=>getComments(req,res))
  })
};