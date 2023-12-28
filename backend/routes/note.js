import express from 'express'
import Note from '../modules/Note.js'
import asyncHandler from 'express-async-handler'
import authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/', authMiddleware, asyncHandler(async (req, res, next) => {
  try {
    const newNote = await Note.create(req.body)
    res.status(201).json(newNote)
  } catch (error) {
    next(error)
  }
}))

// Read All Notes
router.get('/', authMiddleware, asyncHandler(async (req, res, next) => {
  try {
    const notes = await Note.find()
    res.json(notes)
  } catch (error) {
    next(error)
  }
}))

// Read Note by ID
router.get('/:id', authMiddleware, asyncHandler(async (req, res, next) => {
  try {
    const note = await Note.findById(req.params.id)
    res.json(note)
  } catch (error) {
    next(error)
  }
}))

// Update Note by ID
router.put('/:id', authMiddleware, asyncHandler(async (req, res, next) => {
  try {
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.json(updatedNote)
  } catch (error) {
    next(error)
  }
}))

// Soft Delete Note (update isDeleted to true)
router.put('/:id/delete', authMiddleware, asyncHandler(async (req, res, next) => {
  try {
    const softDeletedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { isDeleted: true },
      { new: true }
    )
    res.json(softDeletedNote)
  } catch (error) {
    next(error)
  }
}))

// Permanently Delete Note
router.delete('/:id', authMiddleware, asyncHandler(async (req, res, next) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id)
    res.json(deletedNote)
  } catch (error) {
    next(error)
  }
}))

export default router
