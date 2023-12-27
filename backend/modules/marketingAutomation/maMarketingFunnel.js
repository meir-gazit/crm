import mongoose from 'mongoose'

const marketingFunnelSchema = new mongoose.Schema({
  stages: [{ name: String, description: String }],
  conversionRates: [{ fromStage: String, toStage: String, rate: Number }],
  goals: { type: String },
  
  timestamp: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, defaul: false },
  automationTriggers: [{ trigger: String, action: String }]
})

const maMarketingFunnel = mongoose.model('maMarketingFunnel', marketingFunnelSchema)

export default maMarketingFunnel
