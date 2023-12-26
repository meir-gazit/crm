import mongoose from 'mongoose'
require('dotenv').config()
const mongoURI = process.env.MONGO_URI

const connect = async () => {
  try {
	const conn = await mongoose.connect(MONGO_URI)
    mongoose.connection.on('connected', () => {
		console.log(`MongoDB Connected: ${conn.connection.host}`)
    })
    mongoose.connection.on('error', (err) => {
      console.error(`MongoDB connection error: ${err}`)
    })

  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

module.exports = connect

