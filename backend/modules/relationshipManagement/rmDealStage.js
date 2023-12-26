import mongoose from 'mongoose'

const dealStageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  probabilityOfSuccess: { type: Number },
  durationInStage: { type: Number },
  // Other attributes as needed
})

const rmDealStage = mongoose.model('rmDealStage', dealStageSchema)

module.exports = rmDealStage
