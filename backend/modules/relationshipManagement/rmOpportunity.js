import mongoose from 'mongoose'

const opportunitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  stage: { type: String, required: true },
  value: { type: Number },
  closeDate: { type: Date },
  // Other attributes as needed
})

const rmOpportunity = mongoose.model('rmOpportunity', opportunitySchema)

module.exports = rmOpportunity