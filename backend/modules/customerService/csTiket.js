import mongoose from 'mongoose'

const ticketSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, enum: ['Open', 'In Progress', 'Closed'], default: 'Open' },
  priority: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Medium' },
  assignee: { type: mongoose.Schema.Types.ObjectId, ref: 'csStaff' },
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'csCustomer' },
  timestamp: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, defaul: false },
})

const csTicket = mongoose.model('csTicket', ticketSchema)

export default csTicket
