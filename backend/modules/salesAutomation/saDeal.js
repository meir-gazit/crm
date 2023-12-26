import mongoose from 'mongoose'

const dealSchema = new mongoose.Schema({
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  probability: { type: Number },
  closeDate: { type: Date },
  salesStage: { type: String },
  // Other attributes as needed
})

const saDeal = mongoose.model('saDeal', dealSchema)

export default saDeal
