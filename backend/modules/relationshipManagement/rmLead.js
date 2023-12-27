import mongoose from 'mongoose'

const leadSchema = new mongoose.Schema({
  source: { type: String, required: true }, // Source of the lead (e.g., Marketing Campaign, Referral)
  status: { type: String, required: true }, // Lead status (e.g., New, Qualified, Lost)
  leadScore: { type: Number },
  conversionDate: { type: Date },
  
  timestamp: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, defaul: false },
  // Other attributes as needed
  associatedContact: { type: mongoose.Schema.Types.ObjectId, ref: 'Contact' },
  associatedCompany: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
})

const rmLead = mongoose.model('rmLead', leadSchema)

module.exports = rmLead
