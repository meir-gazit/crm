import dotenv from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
import errorMiddleware from './middleware/errorMiddleware.js'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path'
import connectDB from './config/db.js'

import communicationLogRoutes from './routes/communicationLog.js'
import companyRoutes from './routes/company.js'
import contactRoutes from './routes/contact.js'
import dealStagetRoutes from './routes/dealStage.js'
import eventRoutes from './routes/event.js'
import leadRoutes from './routes/lead.js'
import meetingRoutes from './routes/meeting.js'
import noteRoutes from './routes/note.js'
import opportunityRoutes from './routes/opportunity.js'
import taskRoutes from './routes/task.js'
import userRoutes from './routes/user.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 5000

connectDB()

app.use(bodyParser.json())
app.use(errorMiddleware)

app.use('/communicationLogs', communicationLogRoutes)
app.use('/companies', companyRoutes)
app.use('/contacts', contactRoutes)
app.use('/dealStagets', dealStagetRoutes)
app.use('/events', eventRoutes)
app.use('/leads', leadRoutes)
app.use('/meetings', meetingRoutes)
app.use('/notes', noteRoutes)
app.use('/opportunities', opportunityRoutes)
app.use('/tasks', taskRoutes)
app.use('/users', userRoutes)

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')))

// Serve the login page
app.get('/login', (req, res) => {
	res.sendFile(path.join(__dirname, 'views', 'login.html'))
})

app.listen(port, () => {
	console.log(`\nServer is running on port ${port}`)
})

export default app
