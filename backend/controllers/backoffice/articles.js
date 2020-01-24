const Article = require('../../models/article').Article;

exports.getData = (req,res) => {
  Article.find().then(data=>res.send(data))
}