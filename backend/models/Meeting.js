import mongoose from 'mongoose'

const meetingSchema = new mongoose.Schema({
	title: { type: String, required: true },
	date: { type: Date, required: true },
	location: { type: String },
	participants: [{ type: String }],
	followUpActions: { type: String },
	timestamp: { type: Date, default: Date.now },
	isDeleted: { type: Boolean, default: false },
	associatedContact: { type: mongoose.Schema.Types.ObjectId, ref: 'Contact' },
	associatedCompany: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' }
})

const Meeting = mongoose.model('Meeting', meetingSchema)

export default Meeting
