const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = Schema({
  title: String,
  categorie: String,
  date: Date,
  content: [{}],
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  published: Boolean
})

exports.Article = mongoose.model('Article', articleSchema, 'articles');