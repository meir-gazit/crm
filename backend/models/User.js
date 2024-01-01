import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
	name: String,
	number: Number,
	email: String,
	password: String,
	isDeleted: {
		type: Boolean,
		default: false
	}
})
		
const User = mongoose.model('User', userSchema)

export default User