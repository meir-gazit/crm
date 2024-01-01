import mongoose from 'mongoose'

const dealStageSchema = new mongoose.Schema({
	name: { type: String, required: true },
	description: { type: String },
	probabilityOfSuccess: { type: Number },
	durationInStage: { type: Number },

	timestamp: { type: Date, default: Date.now },
	isDeleted: { type: Boolean, default: false }
	// Other attributes as needed
})

const DealStage = mongoose.model('DealStage', dealStageSchema)

export default DealStage
