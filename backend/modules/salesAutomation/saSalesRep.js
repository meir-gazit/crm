import mongoose from 'mongoose'

const salesRepSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  phone: { type: String },
  role: { type: String },
  territory: { type: mongoose.Schema.Types.ObjectId, ref: 'SalesTerritory' }, // Reference to Sales Territory
  // Other attributes as needed
})

const saSalesRep = mongoose.model('saSalesRep', salesRepSchema)

module.exports = saSalesRep
