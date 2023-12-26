import mongoose from 'mongoose'

const leadScoringModelSchema = new mongoose.Schema({
  criteria: { type: String, required: true },
  scoreRanges: [{ range: String, weight: Number }]
})

const maLeadScoringModel = mongoose.model('maLeadScoringModel', leadScoringModelSchema)

export default maLeadScoringModel
