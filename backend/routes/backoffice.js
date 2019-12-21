const BackofficeRouter = require('express').Router();

/* BackofficeRouter.get('/',
  require('../actions/auth').checkAuthentication,
  require('../controllers/backoffice').index
);
BackofficeRouter.get('/logout',require('../actions/auth').logout); */
BackofficeRouter.get('/*',require('../controllers/backoffice').index);
/* BackofficeRouter.post('/login',require('../actions/auth').login); */

module.exports = BackofficeRouter;