const passport = require('passport');
const ApiRouter = require('express').Router();


ApiRouter.post('/login', passport.authenticate('local'), require('../controllers/backoffice').login);
ApiRouter.get('/logout', require('../controllers/backoffice').logout);
ApiRouter.get('/checkAuthentication', require('../controllers/backoffice').checkAuthentication);

module.exports = ApiRouter;