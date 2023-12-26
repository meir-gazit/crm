import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  dueDate: { type: Date },
  priority: { type: String },
  status: { type: String },
  assignedTo: { type: String },
  // Other attributes as needed
  associatedContact: { type: mongoose.Schema.Types.ObjectId, ref: 'Contact' },
  associatedCompany: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
  associatedOpportunity: { type: mongoose.Schema.Types.ObjectId, ref: 'Opportunity' },
})

const rmTask = mongoose.model('rmTask', taskSchema)

module.exports = rmTask
