import mongoose from 'mongoose'

const ruleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  
  timestamp: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, defaul: false },
  // Other attributes as needed
})

const rRule = mongoose.model('rRule', ruleSchema)

module.exports = rRule
