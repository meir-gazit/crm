import mongoose from 'mongoose'

const knowledgeBaseArticleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String },
  category: { type: String },
  tags: [String],
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'csStaff' },
  timestamp: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, defaul: false },
})

const csKnowledgeBaseArticle = mongoose.model('csKnowledgeBaseArticle', knowledgeBaseArticleSchema)

export default csKnowledgeBaseArticle
