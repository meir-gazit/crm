import mongoose from 'mongoose'

const emailTemplateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  subject: { type: String },
  content: { type: String },
  variables: [String],
  senderInformation: { type: String }
})

const maEmailTemplate = mongoose.model('maEmailTemplate', emailTemplateSchema)

export default maEmailTemplate
