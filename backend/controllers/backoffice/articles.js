const Article = require('../../models/article').Article;
const Comment = require('../../models/comment').Comment;
const getComments = require('./comments').getData;
const del = require('del');
const Jimp = require('jimp');
const fs = require('fs');
const FileType = require('file-type')

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

exports.resizeArticleImages = async (req,res,next) => {
  let imgs = req.files.images;
  if (!Array.isArray(imgs)){imgs = [imgs]};
  var resizeImgs = [];
  const resizeImages = async () => {
    return Promise.all(imgs.map(async file=>{
      await Jimp
      .read(file.path)
      .then(img=>img.resize(1000, Jimp.AUTO).quality(80))
      .then(img=>img.getBufferAsync(file.type))
      .then(img=>resizeImgs.push(img))
      return Promise.resolve('ok')
    }))
  }
  await resizeImages();
  req.files.images = resizeImgs;
  next();
};

exports.uploadArticleImages = async (req,res) => {
  var imagesID = JSON.parse(req.fields.imagesID);
  var urls = [];
  if (process.env.NODE_ENV === 'development') {
    var dir = process.cwd()+'/frontend/static/img/articles/'+req.fields.articleID+'/'
    if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
    }
    for (i=0; i<req.files.images.length; i++) {
      let extension = await FileType.fromBuffer(req.files.images[i])
      urls.push('/img/articles/'+req.fields.articleID+'/'+imagesID[i]+'.'+extension.ext);
      fs.writeFile(dir+imagesID[i]+'.'+extension.ext, req.files.images[i], "binary", (err)=>console.log(err))
    }
  } else {
    console.log("PRODUCTION ==> SAVE IMAGE IN AWS S3")
  }
  res.send({urls, ids: imagesID});
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