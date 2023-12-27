import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  phone: { type: String },
  company: { type: String },
  position: { type: String },
  
  timestamp: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, defaul: false },
})

const csContact = mongoose.model('csContact', contactSchema)

export default csContact
