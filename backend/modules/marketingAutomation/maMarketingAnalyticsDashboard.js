import mongoose from 'mongoose'

const marketingAnalyticsDashboardSchema = new mongoose.Schema({
  kpis: [{ name: String, value: Number }],
  charts: { type: String },
  graphs: { type: String },
  conversionMetrics: { type: String }
})

const maMarketingAnalyticsDashboard = mongoose.model('maMarketingAnalyticsDashboard', marketingAnalyticsDashboardSchema)

export default maMarketingAnalyticsDashboard
