const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String },
  attendees: [{ type: String }],
  organizer: { type: String },
  description: { type: String },
  
  timestamp: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, defaul: false },
  // Other attributes as needed
  associatedContact: { type: mongoose.Schema.Types.ObjectId, ref: 'Contact' },
  associatedCompany: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
})

const Event = mongoose.model('Event', eventSchema)

module.exports = Event
