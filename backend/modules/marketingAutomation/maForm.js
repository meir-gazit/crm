import mongoose from 'mongoose'

const formSchema = new mongoose.Schema({
  fields: [{ name: String, type: String, required: Boolean }],
  purpose: { type: String, enum: ['LeadCapture', 'EventRegistration'] },
  integrationWithCRM: { type: Boolean, default: false }
})

const maForm = mongoose.model('maForm', formSchema)

export default maForm
