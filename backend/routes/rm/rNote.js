import express from 'express'
import Note from '../models/relationshipManagement/Note'

const router = express.Router()

// Create Note
router.post('/notes', async (req, res) => {
  try {
    const newNote = await Note.create(req.body)
    res.status(201).json(newNote)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Read All Notes
router.get('/notes', async (req, res) => {
  try {
    const notes = await Note.find()
    res.json(notes)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Read Note by ID
router.get('/notes/:id', async (req, res) => {
  try {
    const note = await Note.findById(req.params.id)
    res.json(note)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Update Note by ID
router.put('/notes/:id', async (req, res) => {
  try {
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.json(updatedNote)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Soft Delete Note (update isDeleted to true)
router.put('/notes/:id/delete', async (req, res) => {
  try {
    const softDeletedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { isDeleted: true },
      { new: true }
    )
    res.json(softDeletedNote)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Permanently Delete Note
router.delete('/notes/:id', async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id)
    res.json(deletedNote)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router
