import mongoose from 'mongoose'

const salesQuotaSchema = new mongoose.Schema({
  salesRep: { type: mongoose.Schema.Types.ObjectId, ref: 'SalesRep' }, // Reference to Sales Rep
  timePeriod: { type: String, required: true },
  targetRevenue: { type: Number },
  achievedRevenue: { type: Number },
  percentageAchieved: { type: Number },
  
  timestamp: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, defaul: false },
  // Other attributes as needed
})

const saSalesQuota = mongoose.model('saSalesQuota', salesQuotaSchema)

module.exports = saSalesQuota
