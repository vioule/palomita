const MainRouter = require('express').Router();

MainRouter.get('/*',require('../controllers/web').index);

module.exports = MainRouter;