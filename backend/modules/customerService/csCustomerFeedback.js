import mongoose from 'mongoose'

const customerFeedbackSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'csCustomer' },
  rating: { type: Number },
  comments: { type: String },
  feedbackDate: { type: Date, default: Date.now }, 
  timestamp: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, defaul: false },
})

const csCustomerFeedback = mongoose.model('csCustomerFeedback', customerFeedbackSchema)

export default csCustomerFeedback
