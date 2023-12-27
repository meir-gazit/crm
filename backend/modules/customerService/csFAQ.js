import mongoose from 'mongoose'

const faqSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String },
  category: { type: String },
  tags: [String],
  timestamp: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, defaul: false },
})

const csFAQ = mongoose.model('csFAQ', faqSchema)

export default csFAQ
