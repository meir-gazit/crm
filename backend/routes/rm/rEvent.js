import express from 'express'
import Event from '../models/relationshipManagement/Event'

const router = express.Router()

// Create Event
router.post('/events', async (req, res) => {
  try {
    const newEvent = await Event.create(req.body)
    res.status(201).json(newEvent)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Read All Events
router.get('/events', async (req, res) => {
  try {
    const events = await Event.find()
    res.json(events)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Read Event by ID
router.get('/events/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id)
    res.json(event)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Update Event by ID
router.put('/events/:id', async (req, res) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.json(updatedEvent)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Soft Delete Event (update isDeleted to true)
router.put('/events/:id/delete', async (req, res) => {
  try {
    const softDeletedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      { isDeleted: true },
      { new: true }
    )
    res.json(softDeletedEvent)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Permanently Delete Event
router.delete('/events/:id', async (req, res) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id)
    res.json(deletedEvent)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router
