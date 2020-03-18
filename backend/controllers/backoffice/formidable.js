const formidable = require('formidable');
exports.formidable = (req,res,next) => {
  const form = formidable({ multiples: true });
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    req.fields = fields;
    req.files = files;
    next();
  });
}