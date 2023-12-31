import mongoose from 'mongoose'

const connectDB = async () => {
	const db = process.env.MONGODB_URI
	if(process.env.PRINT_LOG=='YES') console.log(`db: ${db}`)

	try {
		await mongoose.connect(process.env.MONGODB_URI)
		console.log('Connected to MongoDB')
	} catch (error) {
		console.error('\nError connecting to MongoDB:', error.message)
		process.exit(1)
	}
}

export default connectDB
