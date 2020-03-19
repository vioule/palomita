const Jimp = require('jimp');
const path = require('path');

const setUrl = (url) => {
  if (process.env.NODE_ENV == 'development') {
    return path.join(process.cwd(), 'frontend/static' , url)
  }
  return url
}

exports.resize = async (req, res, next) => {
  var url = setUrl(req.query.url)
  let img = await Jimp
  .read(url)
  .then(img=>img.resize(Number(req.query.w), Jimp.AUTO))
  .then(img=>img.getBufferAsync(Jimp.AUTO))
  res.write(img)
  res.end(img, 'binary')
};

exports.placeholder = async (req, res, next) => {
  var url = setUrl(req.query.url)
  let img = await Jimp
  .read(url)
  .then(img=>img.resize(10, Jimp.AUTO).resize(500, Jimp.AUTO).quality(50).blur(50))
  .then(img=>img.getBufferAsync(Jimp.AUTO))
  res.write(img)
  res.end(img, 'binary')
}