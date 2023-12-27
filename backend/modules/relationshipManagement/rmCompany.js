import mongoose from 'mongoose'

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  industry: { type: String },
  size: { type: Number },
  location: { type: String },
  
  timestamp: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, defaul: false },
  // Other attributes as needed
})

const rmCompany = mongoose.model('rmCompany', companySchema)

module.exports = rmCompany
