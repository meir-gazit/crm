const express = require('express')
const DealStage = require('../modules/DealStage.js')
const asyncHandler = require('express-async-handler')

const router = express.Router()

router.post('/', asyncHandler(async (req, res, next) => {
  try {
    const newDealStage = await DealStage.create(req.body)
    res.status(201).json(newDealStage)
  } catch (error) {
    next(error)
  }
}))

// Read All DealStages
router.get('/', asyncHandler(async (req, res, next) => {
  try {
    const dealStages = await DealStage.find()
    res.json(dealStages)
  } catch (error) {
    next(error)
  }
}))

// Read DealStage by ID
router.get('/:id', asyncHandler(async (req, res, next) => {
  try {
    const dealStage = await DealStage.findById(req.params.id)
    res.json(dealStage)
  } catch (error) {
    next(error)
  }
}))

// Update DealStage by ID
router.put('/:id', asyncHandler(async (req, res, next) => {
  try {
    const updatedDealStage = await DealStage.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.json(updatedDealStage)
  } catch (error) {
    next(error)
  }
}))

// Soft Delete DealStage (update isDeleted to true)
router.put('/:id/delete', asyncHandler(async (req, res, next) => {
  try {
    const softDeletedDealStage = await DealStage.findByIdAndUpdate(
      req.params.id,
      { isDeleted: true },
      { new: true }
    )
    res.json(softDeletedDealStage)
  } catch (error) {
    next(error)
  }
}))

// Permanently Delete DealStage
router.delete('/:id', asyncHandler(async (req, res, next) => {
  try {
    const deletedDealStage = await DealStage.findByIdAndDelete(req.params.id)
    res.json(deletedDealStage)
  } catch (error) {
    next(error)
  }
}))

module.exports = router
