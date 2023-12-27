import mongoose from 'mongoose'

const communicationLogSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  type: { type: String, required: true }, // e.g., Call, Email, Meeting
  description: { type: String },
  participants: [{ type: String }], // Assuming participants are represented as an array of strings
  outcome: { type: String },
  
  timestamp: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, defaul: false },
  // Other attributes as needed
  associatedContact: { type: mongoose.Schema.Types.ObjectId, ref: 'Contact' }, // Reference to the associated Contact
  associatedCompany: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' }, // Reference to the associated Company
  associatedOpportunity: { type: mongoose.Schema.Types.ObjectId, ref: 'Opportunity' }, // Reference to the associated Opportunity
})

const rmCommunicationLog = mongoose.model('rmCommunicationLog', communicationLogSchema)

module.exports = rmCommunicationLog
