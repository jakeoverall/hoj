let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let schema = new Schema({
  categoryId: { type: ObjectId, ref: 'Category', required: true },
  userId: { type: ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  created: { type: Number, required: true, default: Date.now() },
  comments: [{ type: ObjectId, ref: 'Comment' }],
  votes: {},
  answer: { type: ObjectId,  ref: 'Comment' }



})

module.exports = mongoose.model('Question', schema)