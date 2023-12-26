import mongoose from 'mongoose'

const faqSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String },
  category: { type: String },
  tags: [String],
  createdDate: { type: Date, default: Date.now },
  updatedDate: { type: Date, default: Date.now },
})

const csFAQ = mongoose.model('csFAQ', faqSchema)

export default csFAQ
