import mongoose from 'mongoose'

const customerSatisfactionSurveySchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'csCustomer' },
  surveyQuestions: [{ question: String, answer: String }],
  ratings: { type: Number },
  comments: { type: String },
  surveyDate: { type: Date, default: Date.now },
})

const csCustomerSatisfactionSurvey = mongoose.model('csCustomerSatisfactionSurvey', customerSatisfactionSurveySchema)

export default csCustomerSatisfactionSurvey
