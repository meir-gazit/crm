import mongoose from 'mongoose'

const abTestingSchema = new mongoose.Schema({
  elementToTest: { type: String },
  variations: [{ name: String, description: String }],
  metricsForAnalysis: { type: String }
})

const maABTesting = mongoose.model('maABTesting', abTestingSchema)

export default maABTesting