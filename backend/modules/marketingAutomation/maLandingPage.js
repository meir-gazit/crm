import mongoose from 'mongoose'

const landingPageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  content: { type: String },
  formIntegration: { type: Boolean, default: false },
  
  timestamp: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, defaul: false },
  conversionTracking: { type: Boolean, default: false }
})

const maLandingPage = mongoose.model('maLandingPage', landingPageSchema)

export default maLandingPage
