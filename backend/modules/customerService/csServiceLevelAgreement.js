import mongoose from 'mongoose'

const serviceLevelAgreementSchema = new mongoose.Schema({
  slaName: { type: String, required: true },
  description: { type: String },
  responseTime: { type: Number },
  resolutionTime: { type: Number },
})

const csServiceLevelAgreement = mongoose.model('csServiceLevelAgreement', serviceLevelAgreementSchema)

export default csServiceLevelAgreement
