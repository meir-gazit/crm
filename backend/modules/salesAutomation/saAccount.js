import mongoose from 'mongoose'

const accountSchema = new mongoose.Schema({
  name: { type: String, required: true },
  industry: { type: String },
  size: { type: Number },
  location: { type: String },
  // Other attributes as needed
})

const saAccount = mongoose.model('saAccount', accountSchema)

module.exports = saAccount
