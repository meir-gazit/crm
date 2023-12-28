const express = require('express')
const Contact = require('../modules/Contact.js')
const asyncHandler = require('express-async-handler')
const authMiddleware = require('../middleware/authMiddleware')
const router = express.Router()

router.post('/', authMiddleware, asyncHandler(async (req, res, next) => {
  try {
    const newContact = await Contact.create(req.body)
    res.status(201).json(newContact)
  } catch (error) {
    next(error)
  }
}))

// Read All Contacts
router.get('/', authMiddleware, asyncHandler(async (req, res, next) => {
  try {
    const contacts = await Contact.find()
    res.json(contacts)
  } catch (error) {
    next(error)
  }
}))

// Read Contact by ID
router.get('/:id', authMiddleware, asyncHandler(async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id)
    res.json(contact)
  } catch (error) {
    next(error)
  }
}))

// Update Contact by ID
router.put('/:id', authMiddleware, asyncHandler(async (req, res, next) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.json(updatedContact)
  } catch (error) {
    next(error)
  }
}))

// Soft Delete Contact (update isDeleted to true)
router.put('/:id/delete', authMiddleware, asyncHandler(async (req, res, next) => {
  try {
    const softDeletedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      { isDeleted: true },
      { new: true }
    )
    res.json(softDeletedContact)
  } catch (error) {
    next(error)
  }
}))

// Permanently Delete Contact
router.delete('/:id', authMiddleware, asyncHandler(async (req, res, next) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id)
    res.json(deletedContact)
  } catch (error) {
    next(error)
  }
}))

module.exports = router
