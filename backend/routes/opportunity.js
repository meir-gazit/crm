const express = require('express')
const Opportunity = require('../modules/Opportunity.js')
const asyncHandler = require('express-async-handler')
const authMiddleware = require('../middleware/authMiddleware')
const router = express.Router()

router.post('/', authMiddleware, asyncHandler(async (req, res, next) => {
  try {
    const newOpportunity = await Opportunity.create(req.body)
    res.status(201).json(newOpportunity)
  } catch (error) {
    next(error)
  }
}))

// Read All Opportunities
router.get('/', authMiddleware, asyncHandler(async (req, res, next) => {
  try {
    const opportunities = await Opportunity.find()
    res.json(opportunities)
  } catch (error) {
    next(error)
  }
}))

// Read Opportunity by ID
router.get('/:id', authMiddleware, asyncHandler(async (req, res, next) => {
  try {
    const opportunity = await Opportunity.findById(req.params.id)
    res.json(opportunity)
  } catch (error) {
    next(error)
  }
}))

// Update Opportunity by ID
router.put('/:id', authMiddleware, asyncHandler(async (req, res, next) => {
  try {
    const updatedOpportunity = await Opportunity.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.json(updatedOpportunity)
  } catch (error) {
    next(error)
  }
}))

// Soft Delete Opportunity (update isDeleted to true)
router.put('/:id/delete', authMiddleware, asyncHandler(async (req, res, next) => {
  try {
    const softDeletedOpportunity = await Opportunity.findByIdAndUpdate(
      req.params.id,
      { isDeleted: true },
      { new: true }
    )
    res.json(softDeletedOpportunity)
  } catch (error) {
    next(error)
  }
}))

// Permanently Delete Opportunity
router.delete('/:id', authMiddleware, asyncHandler(async (req, res, next) => {
  try {
    const deletedOpportunity = await Opportunity.findByIdAndDelete(req.params.id)
    res.json(deletedOpportunity)
  } catch (error) {
    next(error)
  }
}))

module.exports = router
