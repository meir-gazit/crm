import express from 'express'
import Meeting from '../models/relationshipManagement/Meeting'

const router = express.Router()

// Create Meeting
router.post('/meetings', async (req, res) => {
  try {
    const newMeeting = await Meeting.create(req.body)
    res.status(201).json(newMeeting)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Read All Meetings
router.get('/meetings', async (req, res) => {
  try {
    const meetings = await Meeting.find()
    res.json(meetings)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Read Meeting by ID
router.get('/meetings/:id', async (req, res) => {
  try {
    const meeting = await Meeting.findById(req.params.id)
    res.json(meeting)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Update Meeting by ID
router.put('/meetings/:id', async (req, res) => {
  try {
    const updatedMeeting = await Meeting.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.json(updatedMeeting)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Soft Delete Meeting (update isDeleted to true)
router.put('/meetings/:id/delete', async (req, res) => {
  try {
    const softDeletedMeeting = await Meeting.findByIdAndUpdate(
      req.params.id,
      { isDeleted: true },
      { new: true }
    )
    res.json(softDeletedMeeting)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Permanently Delete Meeting
router.delete('/meetings/:id', async (req, res) => {
  try {
    const deletedMeeting = await Meeting.findByIdAndDelete(req.params.id)
    res.json(deletedMeeting)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router
