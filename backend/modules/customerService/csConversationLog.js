import mongoose from 'mongoose'

const conversationLogSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'csCustomer' },
  staffMember: { type: mongoose.Schema.Types.ObjectId, ref: 'csStaff' },
  logContent: { type: String },
  timestamp: { type: Date, default: Date.now },
})

const csConversationLog = mongoose.model('csConversationLog', conversationLogSchema)

export default csConversationLog
