let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let categorySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },

  questions: [{ type: ObjectId, ref: 'Question' }]
})

let CategoryModel = mongoose.model('Category', categorySchema)




module.exports = CategoryModel