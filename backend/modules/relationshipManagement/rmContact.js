import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  address: { type: String },
  // Other attributes as needed
})

const rmContact = mongoose.model('rmContact', contactSchema)

module.exports = rmContact
