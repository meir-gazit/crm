import express from 'express'
import CommunicationLog from '../models/relationshipManagement/CommunicationLog'

const router = express.Router()

// Create Communication Log
router.post('/communication-logs', async (req, res) => {
  try {
    const newCommunicationLog = await CommunicationLog.create(req.body)
    res.status(201).json(newCommunicationLog)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Read All Communication Logs
router.get('/communication-logs', async (req, res) => {
  try {
    const communicationLogs = await CommunicationLog.find()
    res.json(communicationLogs)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Read Communication Log by ID
router.get('/communication-logs/:id', async (req, res) => {
  try {
    const communicationLog = await CommunicationLog.findById(req.params.id)
    res.json(communicationLog)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Update Communication Log
router.put('/communication-logs/:id', async (req, res) => {
  try {
    const updatedCommunicationLog = await CommunicationLog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.json(updatedCommunicationLog)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Delete Communication Log (Soft Delete)
router.put('/communication-logs/:id', async (req, res) => {
	try {
	  const updatedCommunicationLog = await CommunicationLog.findByIdAndUpdate(
		req.params.id,
		{ isDeleted: true },
		{ new: true }
	  )
	  res.json(updatedCommunicationLog)
	} catch (error) {
	  res.status(500).json({ error: error.message })
	}
  })
  

export default router
