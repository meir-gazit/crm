import mongoose from 'mongoose'

const opportunitySchema = new mongoose.Schema({
	name: { type: String, required: true },
	stage: { type: String, required: true },
	value: { type: Number },
	closeDate: { type: Date },

	timestamp: { type: Date, default: Date.now },
	isDeleted: { type: Boolean, default: false }
	// Other attributes as needed
})

const Opportunity = mongoose.model('Opportunity', opportunitySchema)

export default Opportunity
