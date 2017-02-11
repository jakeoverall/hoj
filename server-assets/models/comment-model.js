let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let schema = new Schema({
  userId: { type: ObjectId, ref: 'User', required: true },
  questionId: { type: ObjectId, ref: 'Question', required: true },
  body: { type: String, required: true },
  created: { type: Number, required: true, default: Date.now() },
  votes: { type: Object, default: 0 }
  
})
 
module.exports = mongoose.model('Comment', schema)
  



