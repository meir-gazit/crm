const mongoose = require('mongoose');

const connectDB = async () => {
	const db = process.env.MONGODB_URI
	console.log(`db: ${db}`)
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('\nConnected to MongoDB')
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
