import mongoose from 'mongoose'

const contractSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, default: Date.now },
  associatedDeal: { type: mongoose.Schema.Types.ObjectId, ref: 'Deal' }, // Reference to associated Deal
  termsAndConditions: { type: String },
  status: { type: String, enum: ['Draft', 'Sent', 'Accepted', 'Rejected', 'Expired'], default: 'Draft' },
  
  timestamp: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, defaul: false },
  // Other attributes as needed
})

const saContract = mongoose.model('saContract', contractSchema)

export default saContract
