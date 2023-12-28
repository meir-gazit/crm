const express = require('express')
const CommunicationLog = require('../modules/CommunicationLog.js')
const asyncHandler = require('express-async-handler')
const authMiddleware = require('../middleware/authMiddleware')

const router = express.Router()

router.post('/', authMiddleware, asyncHandler(async (req, res, next) => {
  try {
    const newCommunicationLog = await CommunicationLog.create(req.body)
    res.status(201).json(newCommunicationLog)
  } catch (error) {
    next(error)
  }
}))

// Read All Communication Logs
router.get('/', authMiddleware, asyncHandler(async (req, res, next) => {
  try {
    const communicationLogs = await CommunicationLog.find()
    res.json(communicationLogs)
  } catch (error) {
    next(error)
  }
}))

// Read Communication Log by ID
router.get('/:id', authMiddleware, asyncHandler(async (req, res, next) => {
  try {
    const communicationLog = await CommunicationLog.findById(req.params.id)
    res.json(communicationLog)
  } catch (error) {
    next(error)
  }
}))

// Update Communication Log
router.put('/:id', authMiddleware, asyncHandler(async (req, res, next) => {
  try {
    const updatedCommunicationLog = await CommunicationLog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.json(updatedCommunicationLog)
  } catch (error) {
    next(error)
  }
}))

// Delete Communication Log (Soft Delete)
router.put('/:id', authMiddleware, asyncHandler(async (req, res, next) => {
	try {
	  const updatedCommunicationLog = await CommunicationLog.findByIdAndUpdate(
		req.params.id,
		{ isDeleted: true },
		{ new: true }
	  )
	  res.json(updatedCommunicationLog)
	} catch (error) {
		next(error)
	}
  }))
  

  module.exports = router
