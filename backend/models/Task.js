import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
	title: { type: String, required: true },
	dueDate: { type: Date },
	priority: { type: String },
	status: { type: String },
	assignedTo: { type: String },
	timestamp: { type: Date, default: Date.now },
	isDeleted: { type: Boolean, default: false },
	associatedContact: { type: mongoose.Schema.Types.ObjectId, ref: 'Contact' },
	associatedCompany: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
	associatedOpportunity: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Opportunity'
	}
})

const Task = mongoose.model('Task', taskSchema)

export default Task
