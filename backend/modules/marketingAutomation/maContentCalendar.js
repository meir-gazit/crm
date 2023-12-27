import mongoose from 'mongoose'

const contentCalendarSchema = new mongoose.Schema({
  contentPieces: [{ title: String, type: String, date: Date }],
  publicationDates: [{ date: Date, contentPiece: String }],
  channels: [{ name: String }],
  assignees: [{ name: String }],
  
  timestamp: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, defaul: false },
  status: { type: String }
})

const maContentCalendar = mongoose.model('maContentCalendar', contentCalendarSchema)

export default maContentCalendar
