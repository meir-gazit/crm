import mongoose from 'mongoose'

const campaignSchema = new mongoose.Schema({
  name: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  description: { type: String },
  budget: { type: Number },
  
  timestamp: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, defaul: false },
  status: { type: String, enum: ['Planned', 'Active', 'Completed', 'Canceled'], default: 'Planned' }
})

const maCampaign = mongoose.model('maCampaign', campaignSchema)

export default maCampaign
