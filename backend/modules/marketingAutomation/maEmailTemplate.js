import mongoose from 'mongoose'

const emailTemplateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  subject: { type: String },
  content: { type: String },
  variables: [String],
  
  timestamp: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, defaul: false },
  senderInformation: { type: String }
})

const maEmailTemplate = mongoose.model('maEmailTemplate', emailTemplateSchema)

export default maEmailTemplate
