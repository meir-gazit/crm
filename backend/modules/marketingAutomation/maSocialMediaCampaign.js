import mongoose from 'mongoose'

const socialMediaCampaignSchema = new mongoose.Schema({
  platform: { type: String },
  campaignDetails: { type: String },
  adSpend: { type: Number },
  
  timestamp: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, defaul: false },
  analyticsIntegration: { type: Boolean, default: false }
})

const maSocialMediaCampaign = mongoose.model('maSocialMediaCampaign', socialMediaCampaignSchema)

export default maSocialMediaCampaign
