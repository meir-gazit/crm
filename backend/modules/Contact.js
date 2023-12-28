const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  address: { type: String },
  
  timestamp: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, defaul: false },
  // Other attributes as needed
})

const Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact
