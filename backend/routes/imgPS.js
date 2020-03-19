const ImageProcessServices = require('express').Router();

ImageProcessServices.get('/resize', require('../controllers/imgProcessServices').resize);
ImageProcessServices.get('/placeholder', require('../controllers/imgProcessServices').placeholder);

module.exports = ImageProcessServices;