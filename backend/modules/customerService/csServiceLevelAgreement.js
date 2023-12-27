import mongoose from 'mongoose'

const serviceLevelAgreementSchema = new mongoose.Schema({
  slaName: { type: String, required: true },
  description: { type: String },
  responseTime: { type: Number },
  resolutionTime: { type: Number },
  timestamp: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, defaul: false },
})

const csServiceLevelAgreement = mongoose.model('csServiceLevelAgreement', serviceLevelAgreementSchema)

export default csServiceLevelAgreement
