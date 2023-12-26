import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String },
  price: { type: Number },
  description: { type: String },
  features: [String],
  // Other attributes as needed
})

const saProduct = mongoose.model('saProduct', productSchema)

module.exports = saProduct