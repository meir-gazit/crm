import mongoose from 'mongoose'

const conversationLogSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'csCustomer' },
  staffMember: { type: mongoose.Schema.Types.ObjectId, ref: 'csStaff' },
  logContent: { type: String },
  timestamp: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, defaul: false },
})

const csConversationLog = mongoose.model('csConversationLog', conversationLogSchema)

export default csConversationLog
