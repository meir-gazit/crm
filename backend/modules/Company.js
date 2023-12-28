const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  industry: { type: String },
  size: { type: Number },
  location: { type: String },
  timestamp: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, defaul: false },
})

const Company = mongoose.model('Company', companySchema)

module.exports = Company
