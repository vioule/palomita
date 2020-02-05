const passport = require('passport');
const ApiRouter = require('express').Router();

//LOGIN//
ApiRouter.post('/login', passport.authenticate('local'), require('../controllers/backoffice/login').login);
ApiRouter.get('/logout', require('../controllers/backoffice/login').logout);
ApiRouter.get('/checkAuthentication', require('../controllers/backoffice/login').checkAuthentication);

//ARTICLES//
ApiRouter.get('/getArticles', require('../controllers/backoffice/articles').getData);

//COMMENTS//
ApiRouter.get('/getComments', require('../controllers/backoffice/comments').getData);
ApiRouter.get('/getConversation', require('../controllers/backoffice/comments').getConversation);
ApiRouter.delete('/deleteComments', require('../controllers/backoffice/comments').deleteComments);
ApiRouter.post('/createAnswer', require('../controllers/backoffice/comments').createAnswer);

module.exports = ApiRouter;