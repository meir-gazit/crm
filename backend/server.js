import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import connectDB from './config/db.js' 
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoutes from './routes/api/userRoutes.js';

const app = express();

// conect to mongodb
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the MERN app!');
});

// Start the server
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
