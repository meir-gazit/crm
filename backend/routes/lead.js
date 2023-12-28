const express = require('express')
const Lead = require('../modules/Lead.js')
const asyncHandler = require('express-async-handler')
const authMiddleware = require('../middleware/authMiddleware')
const router = express.Router()

router.post('/', authMiddleware, asyncHandler(async (req, res, next) => {
  try {
    const newLead = await Lead.create(req.body)
    res.status(201).json(newLead)
  } catch (error) {
    next(error)
  }
}))

// Read All Leads
router.get('/', authMiddleware, asyncHandler(async (req, res, next) => {
  try {
    const leads = await Lead.find()
    res.json(leads)
  } catch (error) {
    next(error)
  }
}))

// Read Lead by ID
router.get('/:id', authMiddleware, asyncHandler(async (req, res, next) => {
  try {
    const lead = await Lead.findById(req.params.id)
    res.json(lead)
  } catch (error) {
    next(error)
  }
}))

// Update Lead by ID
router.put('/:id', authMiddleware, asyncHandler(async (req, res, next) => {
  try {
    const updatedLead = await Lead.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.json(updatedLead)
  } catch (error) {
    next(error)
  }
}))

// Soft Delete Lead (update isDeleted to true)
router.put('/:id/delete', authMiddleware, asyncHandler(async (req, res, next) => {
  try {
    const softDeletedLead = await Lead.findByIdAndUpdate(
      req.params.id,
      { isDeleted: true },
      { new: true }
    )
    res.json(softDeletedLead)
  } catch (error) {
    next(error)
  }
}))

// Permanently Delete Lead
router.delete('/:id', authMiddleware, asyncHandler(async (req, res, next) => {
  try {
    const deletedLead = await Lead.findByIdAndDelete(req.params.id)
    res.json(deletedLead)
  } catch (error) {
    next(error)
  }
}))

module.exports = router
