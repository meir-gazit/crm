import mongoose from 'mongoose'

const socialMediaCampaignSchema = new mongoose.Schema({
  platform: { type: String },
  campaignDetails: { type: String },
  adSpend: { type: Number },
  analyticsIntegration: { type: Boolean, default: false }
})

const maSocialMediaCampaign = mongoose.model('maSocialMediaCampaign', socialMediaCampaignSchema)

export default maSocialMediaCampaign
