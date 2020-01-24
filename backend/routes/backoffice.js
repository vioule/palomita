const BackofficeRouter = require('express').Router();

BackofficeRouter.get('/*',require('../controllers/backoffice').index);

module.exports = BackofficeRouter;