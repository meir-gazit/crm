import mongoose from 'mongoose'

const webinarSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date },
  host: { type: String },
  registrationDetails: { type: String },
  attendanceTracking: { type: Boolean, default: false }
})

const maWebinar = mongoose.model('maWebinar', webinarSchema)

export default maWebinar
