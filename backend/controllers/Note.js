import mongoose from 'mongoose'

const noteSchema = new mongoose.Schema({
	title: { type: String, required: true },
	content: { type: String, required: true },
	date: { type: Date, default: Date.now },
	timestamp: { type: Date, default: Date.now },
	isDeleted: { type: Boolean, default: false },
	associatedContact: { type: mongoose.Schema.Types.ObjectId, ref: 'Contact' },
	associatedCompany: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
	associatedOpportunity: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Opportunity'
	}
})

const Note = mongoose.model('Note', noteSchema)

export default Note
