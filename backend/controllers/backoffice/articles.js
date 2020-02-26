const Article = require('../../models/article').Article;
const Comment = require('../../models/comment').Comment;
const getComments = require('./comments').getData;
const del = require('del');

exports.getData = (req,res) => {
  Article.find().then(data=>res.send(data))
}

exports.deleteArticle = (req,res) => {
  del.sync([process.cwd()+'/frontend/static/img/articles/'+req.query.id+'/**', process.cwd()+'/frontend/static/img/articles/'+req.query.id])
  Article
  .deleteOne({_id: req.query.id})
  .then(()=>{
    Comment.deleteMany({_id: {$in: req.query.comments}})
    .then(()=>getComments(req,res))
  })
};

exports.createArticle = (req,res) => {
  let article = new Article(req.body.article);
  article
  .save()
  .then(()=>this.getData(req,res))
};

exports.updateArticle = (req,res) => {
  let urls = req.body.article.content.filter(content=>content.type=="image")
  urls = urls.map(url=>'!'+process.cwd()+'/frontend/static'+url.data)
  del.sync([process.cwd()+'/frontend/static/img/articles/'+req.body.article.id+'/*'].concat(urls))
  Article
  .updateOne({_id: req.body.article.id}, {title: req.body.article.title, categorie: req.body.article.categorie, content: req.body.article.content, published: req.body.article.published})
  .then(()=>this.getData(req,res))
};

exports.uploadArticleImages = (req,res) => {
  var output = req.files.map(file=>'/'+file.path.split('/static/')[1])
  res.send(output)
};

exports.getPublishedArticlesByDate = (req,res) => {
  Article.find({published: true})
  .sort({date: -1})
  .then(data=>res.send(data))
};