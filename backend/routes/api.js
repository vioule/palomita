const passport = require('passport');
const ApiRouter = require('express').Router();

//LOGIN//
ApiRouter.post('/login', passport.authenticate('local'), require('../controllers/backoffice/login').login);
ApiRouter.get('/logout', require('../controllers/backoffice/login').logout);
ApiRouter.get('/checkAuthentication', require('../controllers/backoffice/login').checkAuthentication);

//ARTICLES//
ApiRouter.get('/getArticles', require('../controllers/backoffice/articles').getData);
ApiRouter.get('/getPublishedArticlesByDate', require('../controllers/backoffice/articles').getPublishedArticlesByDate);
ApiRouter.get('/getArticle', require('../controllers/backoffice/articles').getArticle);
ApiRouter.delete('/deleteArticle', require('../controllers/backoffice/articles').deleteArticle);
ApiRouter.post('/createArticle', require('../controllers/backoffice/articles').createArticle);
ApiRouter.put('/updateArticle', require('../controllers/backoffice/articles').updateArticle);
ApiRouter.post('/uploadArticleImages', require('../controllers/backoffice/formidable').formidable, require('../controllers/backoffice/articles').resizeArticleImages, require('../controllers/backoffice/articles').uploadArticleImages);

//COMMENTS//
ApiRouter.get('/getComments', require('../controllers/backoffice/comments').getData);
ApiRouter.get('/getCommentsByArticle', require('../controllers/backoffice/comments').getCommentsByArticle);
ApiRouter.get('/getConversation', require('../controllers/backoffice/comments').getConversation);
ApiRouter.delete('/deleteComments', require('../controllers/backoffice/comments').deleteComments);
ApiRouter.post('/createAnswer', require('../controllers/backoffice/comments').createAnswer);
ApiRouter.post('/createComment', require('../controllers/backoffice/comments').createComment);
ApiRouter.put('/readComments', require('../controllers/backoffice/comments').readComments);

//IMAGE PROCESSING//
ApiRouter.get('/imageProcess', require('../controllers/backoffice/imgProcessing').process);

module.exports = ApiRouter;