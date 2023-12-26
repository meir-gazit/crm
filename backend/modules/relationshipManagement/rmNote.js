import mongoose from 'mongoose'

const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, default: Date.now },
  // Other attributes as needed
  associatedContact: { type: mongoose.Schema.Types.ObjectId, ref: 'Contact' },
  associatedCompany: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
  associatedOpportunity: { type: mongoose.Schema.Types.ObjectId, ref: 'Opportunity' },
})

const rmNote = mongoose.model('rmNote', noteSchema)

module.exports = rmNote