exports.process = (req, res, next) => {
  res.json(req.query.url)
}