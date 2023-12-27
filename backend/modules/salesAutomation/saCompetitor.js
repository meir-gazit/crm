import mongoose from 'mongoose'

const competitorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  strengths: { type: String },
  weaknesses: { type: String },
  marketShare: { type: Number },
  
  timestamp: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, defaul: false },
  // Other attributes as needed
})

const saCompetitor = mongoose.model('saCompetitor', competitorSchema)

export default saCompetitor
