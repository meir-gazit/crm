import mongoose from 'mongoose'

const adCampaignSchema = new mongoose.Schema({
  adPlatform: { type: String },
  budget: { type: Number },
  targetAudience: { type: String },
  adCreatives: { type: String },
  conversionTracking: { type: Boolean, default: false }
})

const maAdCampaign = mongoose.model('maAdCampaign', adCampaignSchema)

export default maAdCampaign
