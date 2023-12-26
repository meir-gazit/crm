import mongoose from 'mongoose'

const escalationSchema = new mongoose.Schema({
  ticket: { type: mongoose.Schema.Types.ObjectId, ref: 'csTicket' },
  escalationLevel: { type: String },
  reason: { type: String },
  timestamp: { type: Date, default: Date.now },
})

const csEscalation = mongoose.model('csEscalation', escalationSchema)

export default csEscalation
