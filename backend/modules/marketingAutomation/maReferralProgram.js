import mongoose from 'mongoose'

const referralProgramSchema = new mongoose.Schema({
  name: { type: String },
  rewardsStructure: { type: String },
  referralTracking: { type: Boolean, default: false },
  
  timestamp: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, defaul: false },
  communicationPlan: { type: String }
})

const maReferralProgram = mongoose.model('maReferralProgram', referralProgramSchema)

export default maReferralProgram
