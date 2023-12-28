const mongoose = require('mongoose')

const opportunitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  stage: { type: String, required: true },
  value: { type: Number },
  closeDate: { type: Date },
  
  timestamp: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, defaul: false },
  // Other attributes as needed
})

const Opportunity = mongoose.model('Opportunity', opportunitySchema)

module.exports = Opportunity