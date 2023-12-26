import mongoose from 'mongoose'

const salesTerritorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  region: { type: String },
  assignedSalesReps: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SalesRep' }], // Reference to Sales Reps
  targetAccounts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Account' }], // Reference to Accounts
  // Other attributes as needed
})

const saSalesTerritory = mongoose.model('saSalesTerritory', salesTerritorySchema)

module.exports = saSalesTerritory
