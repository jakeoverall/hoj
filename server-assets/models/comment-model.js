let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let schema = new Schema({
  userId: { type: ObjectId, ref: 'User', required: true },
  questionId: { type: ObjectId, ref: 'Question', required: true },
  body: { type: String, required: true },
  created: { type: String, required: true },
  votes: { }
  
})
 
module.exports = mongoose.model('Comment', schema)
  



