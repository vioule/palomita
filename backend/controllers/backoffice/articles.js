const Article = require('../../models/article').Article;
const Comment = require('../../models/comment').Comment;
const getComments = require('./comments').getData;
const del = require('del');
const Jimp = require('jimp');
const fs = require('fs');
const FileType = require('file-type')
const AWS = require('aws-sdk');
const s3 = new AWS.S3({
  accessKeyId: process.env.S3_KEY_ACCESS,
  secretAccessKey: process.env.S3_ACCESS_SECRET
});

async function deleteS3ObjectsFromDirectory(bucket, dir, preserve=[]) {
  const listParams = {
      Bucket: bucket,
      Prefix: dir
  };
  const listedObjects = await s3.listObjectsV2(listParams).promise();
  if (listedObjects.Contents.length === 0) return;
  const deleteParams = {
      Bucket: bucket,
      Delete: { Objects: [] }
  };
  listedObjects.Contents.forEach(({ Key }) => {
      if (!preserve.includes(Key)) {
        deleteParams.Delete.Objects.push({ Key });
      }
  });
  if (deleteParams.Delete.Objects.length > 0) {
    await s3.deleteObjects(deleteParams).promise();
    await deleteS3ObjectsFromDirectory(bucket, dir, preserve);
  }
};

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

exports.deleteArticle = async (req,res) => {
  if (process.env.NODE_ENV === 'development') {
    del.sync([process.cwd()+'/frontend/static/img/articles/'+req.query.id+'/**', process.cwd()+'/frontend/static/img/articles/'+req.query.id])
  } else {
    await deleteS3ObjectsFromDirectory(process.env.S3_BUCKET_NAME, 'articles/'+req.query.id)
  }
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

exports.updateArticle = async (req,res) => {
  if (process.env.NODE_ENV === 'development') {
    let urls = req.body.article.content.filter(content=>content.type=="image")
    urls = urls.map(url=>'!'+process.cwd()+'/frontend/static'+url.data)
    del.sync([process.cwd()+'/frontend/static/img/articles/'+req.body.article.id+'/*'])
  } else {
    await deleteS3ObjectsFromDirectory(
      process.env.S3_BUCKET_NAME, 
      'articles/'+req.body.article.id, 
      req.body.article.content.filter(el=>el.type=='image').map(el=>'articles/'+el.data.split('/articles/')[1])
    )
  }
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
    const uploadImgs = async () =>{
      let promises = [];
      for (i=0; i<req.files.images.length; i++) {
        let extension = await FileType.fromBuffer(req.files.images[i])
        let params = {
          Bucket: process.env.S3_BUCKET_NAME,
          Key: 'articles/'+req.fields.articleID+'/'+imagesID[i]+'.'+extension.ext,
          ContentType: extension.mime,
          Body: req.files.images[i],
          ACL: 'public-read'
        }
        let upload = s3.upload(params)
        let promise = upload
        .promise()
        .then(
          (data)=>{
            urls.push(data.Location)
            return Promise.resolve('ok')
          },(err)=>{
            console.log(err)
            return Promise.reject(err)
          })
        promises.push(promise)
      };
      return Promise.all(promises)
    };
    await uploadImgs();
  }
  urls = imagesID.map(id=>urls.find(el=>el.includes(id))) //ensure imgs order
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