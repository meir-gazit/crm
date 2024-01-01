import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import connectDB from './config/db.js' 
import bodyParser from 'body-parser'
import cors from 'cors'

import userRoutes from './routes/api/userRoutes.js'
import contactRoutes from './routes/api/contactRoutes.js'
import companyRoutes from './routes/api/companyRoutes.js'
import eventRoutes from './routes/api/eventRoutes.js'
import dealStageRoutes from './routes/api/dealStageRoutes.js'
import leadRoutes from './routes/api/leadRoutes.js'
import meetingRoutes from './routes/api/meetingRoutes.js'
import noteRoutes from './routes/api/noteRoutes.js'
import opportunityRoutes from './routes/api/opportunityRoutes.js'
import taskRoutes from './routes/api/taskRoutes.js'

const app = express()

// conect to mongodb
connectDB()

// Middleware
app.use(cors())
app.use(bodyParser.json())

// Routes
app.use('/api/users', userRoutes)
app.use('/api/contacts', contactRoutes)
app.use('/api/companies', companyRoutes)
app.use('/api/events', eventRoutes)
app.use('/api/dealStages', dealStageRoutes)
app.use('/api/leads', leadRoutes)
app.use('/api/meetings', meetingRoutes)
app.use('/api/notes', noteRoutes)
app.use('/api/opportunities', opportunityRoutes)
app.use('/api/tasks', taskRoutes)

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to Influence Sphere CRM')
})

// Start the server
const PORT = process.env.PORT || 5500
app.listen(PORT, () => {
  console.log(`\nServer is running on port ${PORT}`)
})
