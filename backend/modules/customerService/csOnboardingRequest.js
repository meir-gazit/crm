import mongoose from 'mongoose'

const onboardingRequestSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'csCustomer' },
  requestedServices: [String],
  status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
  assignedStaff: { type: mongoose.Schema.Types.ObjectId, ref: 'csStaff' },
  dueDate: { type: Date },
  description: { type: String },
  timestamp: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, defaul: false },
})

const csOnboardingRequest = mongoose.model('csOnboardingRequest', onboardingRequestSchema)

export default csOnboardingRequest
