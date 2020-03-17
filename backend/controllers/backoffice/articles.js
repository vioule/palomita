const Article = require('../../models/article').Article;
const Comment = require('../../models/comment').Comment;
const getComments = require('./comments').getData;
const del = require('del');
const Jimp = require('jimp');

exports.getData = (req,res) => {
  Article.find().then(data=>res.send(data))
}
exports.getArticle = (req,res) => {
  Article
  .findOne({_id: req.query.id})
  .populate("comments")
  .exec()
  .then(data=>{res.send(data)})
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
  let placeholders = urls.map(url=>{
    return url.substring(0,url.lastIndexOf('.'))+'-placeholder'+url.substring(url.lastIndexOf('.'))
  })


  del.sync([process.cwd()+'/frontend/static/img/articles/'+req.body.article.id+'/*'].concat(urls).concat(placeholders))
  Article
  .updateOne({_id: req.body.article.id}, {title: req.body.article.title, categorie: req.body.article.categorie, vignette: req.body.article.vignette, content: req.body.article.content, published: req.body.article.published})
  .then(()=>this.getData(req,res))
};

exports.resizeArticleImages = (req,res,next) => {
  req.files.map(file=>{
    Jimp.read(file.path)
    .then(img=>{
      img
      .resize(1000, Jimp.AUTO)
      .quality(80)
      .write(file.path)
      return img
      .resize(10, Jimp.AUTO)
      .resize(500, Jimp.AUTO)
      .quality(50)
      .blur(50)
      .write(file.path.substring(0, file.path.lastIndexOf('.'))+'-placeholder'+file.path.substring(file.path.lastIndexOf('.')));
    })
    .catch(err=>console.error(err))
  })
  next();
};

exports.uploadArticleImages = (req,res) => {
  var output = req.files.map(file=>'/'+file.path.split('/static/')[1])
  res.send(output)
};

exports.getPublishedArticlesByDate = (req,res) => {
  // setTimeout(()=>{
  //   Article.find({published: true})
  //   .sort({date: -1})
  //   .then(data=>{res.send(data)})
  // },3000)
  
  Article.find({published: true})
  .sort({date: -1})
  .then(data=>{res.send(data)})
};