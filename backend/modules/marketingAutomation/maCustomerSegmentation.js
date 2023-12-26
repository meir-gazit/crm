import mongoose from 'mongoose'

const customerSegmentationSchema = new mongoose.Schema({
  criteria: { type: String },
  segmentNames: [{ name: String }],
  dynamic: { type: Boolean, default: true }
})

const maCustomerSegmentation = mongoose.model('maCustomerSegmentation', customerSegmentationSchema)

export default maCustomerSegmentation
