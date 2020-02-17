const passport = require('passport');
const ApiRouter = require('express').Router();
const multer = require('multer');
const uuidv4 = require('uuid/v4');
var fs = require('fs');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    var dir = process.cwd()+'/frontend/static/img/articles/'+req.body.articleID+'/'
    if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
    }
    cb(null, dir)
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4()+'.jpg')
  }
})
var upload = multer({storage: storage})

//LOGIN//
ApiRouter.post('/login', passport.authenticate('local'), require('../controllers/backoffice/login').login);
ApiRouter.get('/logout', require('../controllers/backoffice/login').logout);
ApiRouter.get('/checkAuthentication', require('../controllers/backoffice/login').checkAuthentication);

//ARTICLES//
ApiRouter.get('/getArticles', require('../controllers/backoffice/articles').getData);
ApiRouter.delete('/deleteArticle', require('../controllers/backoffice/articles').deleteArticle);
ApiRouter.post('/createArticle', require('../controllers/backoffice/articles').createArticle);
ApiRouter.put('/updateArticle', require('../controllers/backoffice/articles').updateArticle);
ApiRouter.post('/uploadArticleImages', upload.array('images') ,require('../controllers/backoffice/articles').uploadArticleImages);

//COMMENTS//
ApiRouter.get('/getComments', require('../controllers/backoffice/comments').getData);
ApiRouter.get('/getConversation', require('../controllers/backoffice/comments').getConversation);
ApiRouter.delete('/deleteComments', require('../controllers/backoffice/comments').deleteComments);
ApiRouter.post('/createAnswer', require('../controllers/backoffice/comments').createAnswer);
ApiRouter.post('/createComment', require('../controllers/backoffice/comments').createComment);
ApiRouter.put('/readComments', require('../controllers/backoffice/comments').readComments);

module.exports = ApiRouter;