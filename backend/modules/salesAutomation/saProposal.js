import mongoose from 'mongoose'

const proposalSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, default: Date.now },
  associatedDeal: { type: mongoose.Schema.Types.ObjectId, ref: 'Deal' }, // Reference to associated Deal
  content: { type: String },
  status: { type: String, enum: ['Draft', 'Sent', 'Accepted', 'Rejected'], default: 'Draft' }
})

const saProposal = mongoose.model('saProposal', proposalSchema)

export default saProposal