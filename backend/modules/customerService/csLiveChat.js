import mongoose from 'mongoose'

const liveChatSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'csCustomer' },
  staffMember: { type: mongoose.Schema.Types.ObjectId, ref: 'csStaff' },
  chatContent: { type: String },
  timestamp: { type: Date, default: Date.now },
})

const csLiveChat = mongoose.model('csLiveChat', liveChatSchema)

export default csLiveChat
