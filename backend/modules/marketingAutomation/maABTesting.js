import mongoose from 'mongoose'

const abTestingSchema = new mongoose.Schema({
  elementToTest: { type: String },
  variations: [{ name: String, description: String }],
  metricsForAnalysis: { type: String },
  
  timestamp: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, defaul: false },
})

const maABTesting = mongoose.model('maABTesting', abTestingSchema)

export default maABTesting