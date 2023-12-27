import mongoose from 'mongoose'

const customerSegmentationSchema = new mongoose.Schema({
  criteria: { type: String },
  segmentNames: [{ name: String }],
  
  timestamp: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, defaul: false },
  dynamic: { type: Boolean, default: true }
})

const maCustomerSegmentation = mongoose.model('maCustomerSegmentation', customerSegmentationSchema)

export default maCustomerSegmentation
