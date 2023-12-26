import mongoose from 'mongoose'

const caseManagementSchema = new mongoose.Schema({
  caseTitle: { type: String },
  description: { type: String },
  status: { type: String, enum: ['Open', 'In Progress', 'Closed'], default: 'Open' },
  assignedAgent: { type: mongoose.Schema.Types.ObjectId, ref: 'csStaff' },
  dueDate: { type: Date },
  priority: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Medium' },
})

const csCaseManagement = mongoose.model('csCaseManagement', caseManagementSchema)

export default csCaseManagement
