import mongoose from 'mongoose'

const winLossAnalysisSchema = new mongoose.Schema({
  reason: { type: String },
  customerFeedback: { type: String },
  marketTrends: { type: String },
  // Other attributes as needed
  associatedDeal: { type: mongoose.Schema.Types.ObjectId, ref: 'Deal' }, // Reference to Deal
})

const saWinLossAnalysis = mongoose.model('saWinLossAnalysis', winLossAnalysisSchema)

module.exports = saWinLossAnalysis
