const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = Schema({
  title: String,
  date: Date,
  categorie: String,
  comments: [String]
})

exports.Article = mongoose.model('Article', articleSchema, 'articles');