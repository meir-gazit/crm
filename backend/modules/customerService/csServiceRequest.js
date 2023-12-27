import mongoose from 'mongoose'

const serviceRequestSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'csCustomer' },
  requestedService: { type: String },
  status: { type: String, enum: ['Open', 'Assigned', 'Completed'], default: 'Open' },
  assignedStaff: { type: mongoose.Schema.Types.ObjectId, ref: 'csStaff' },
  dueDate: { type: Date },
  description: { type: String },
  timestamp: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, defaul: false },
})

const csServiceRequest = mongoose.model('csServiceRequest', serviceRequestSchema)

export default csServiceRequest
