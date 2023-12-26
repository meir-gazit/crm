import mongoose from 'mongoose'

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String },
  attendees: [{ type: String }],
  organizer: { type: String },
  description: { type: String },
  // Other attributes as needed
  associatedContact: { type: mongoose.Schema.Types.ObjectId, ref: 'Contact' },
  associatedCompany: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
})

const rmEvent = mongoose.model('rmEvent', eventSchema)

module.exports = rmEvent
