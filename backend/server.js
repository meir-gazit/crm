require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const errorMiddleware = require('./middleware/errorMiddleware')
const path = require('path')
const connectDB = require('./config/db')

const communicationLogRoutes = require('./routes/communicationLog')
const companyRoutes = require('./routes/company')
const contactRoutes = require('./routes/contact')
const dealStagetRoutes = require('./routes/dealStage')
const eventRoutes = require('./routes/event')
const leadRoutes = require('./routes/lead')
const meetingRoutes = require('./routes/meeting')
const noteRoutes = require('./routes/note')
const opportunityRoutes = require('./routes/opportunity')
const taskRoutes = require('./routes/task')
const userRoutes = require('./routes/user')

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

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the login page
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.listen(port, () => {console.log(`Server is running on port ${port}`)})












