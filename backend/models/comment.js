const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = Schema({
  author: {},
  date: Date,
  content: String,
  parent: { type: Schema.Types.ObjectId, ref: "Article" },
  reponse: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  type: String,
  read: Boolean
})

exports.Comment = mongoose.model('Comment', commentSchema, 'comments');