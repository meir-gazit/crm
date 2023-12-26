import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  phone: { type: String },
  company: { type: String },
  position: { type: String },
})

const csContact = mongoose.model('csContact', contactSchema)

export default csContact
