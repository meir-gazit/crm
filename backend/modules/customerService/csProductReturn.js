import mongoose from 'mongoose'

const productReturnSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'csCustomer' },
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'csOrder' },
  returnReason: { type: String },
  status: { type: String, enum: ['Requested', 'Approved', 'Rejected'], default: 'Requested' },
  resolution: { type: String },
  timestamp: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, defaul: false },
})

const csProductReturn = mongoose.model('csProductReturn', productReturnSchema)

export default csProductReturn
