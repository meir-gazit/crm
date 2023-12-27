import mongoose from 'mongoose'

const salesActivitySchema = new mongoose.Schema({
  type: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String },
  outcome: { type: String },
  
  timestamp: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, defaul: false },
  // Other attributes as needed
})

const saSalesActivity = mongoose.model('saSalesActivity', salesActivitySchema)

module.exports = saSalesActivity