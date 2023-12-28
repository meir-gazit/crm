import express from 'express'
import Event from '../modules/Event.js'
import asyncHandler from 'express-async-handler'
import authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router()

router.post(
	'/',
	authMiddleware,
	asyncHandler(async (req, res, next) => {
		try {
			const newEvent = await Event.create(req.body)
			res.status(201).json(newEvent)
		} catch (error) {
			next(error)
		}
	})
)

// Read All Events
router.get(
	'/',
	authMiddleware,
	asyncHandler(async (req, res, next) => {
		try {
			const events = await Event.find()
			res.json(events)
		} catch (error) {
			next(error)
		}
	})
)

// Read Event by ID
router.get(
	'/:id',
	authMiddleware,
	asyncHandler(async (req, res, next) => {
		try {
			const event = await Event.findById(req.params.id)
			res.json(event)
		} catch (error) {
			next(error)
		}
	})
)

// Update Event by ID
router.put(
	'/:id',
	authMiddleware,
	asyncHandler(async (req, res, next) => {
		try {
			const updatedEvent = await Event.findByIdAndUpdate(
				req.params.id,
				req.body,
				{ new: true }
			)
			res.json(updatedEvent)
		} catch (error) {
			next(error)
		}
	})
)

// Soft Delete Event (update isDeleted to true)
router.put(
	'/:id/delete',
	authMiddleware,
	asyncHandler(async (req, res, next) => {
		try {
			const softDeletedEvent = await Event.findByIdAndUpdate(
				req.params.id,
				{ isDeleted: true },
				{ new: true }
			)
			res.json(softDeletedEvent)
		} catch (error) {
			next(error)
		}
	})
)

// Permanently Delete Event
router.delete(
	'/:id',
	authMiddleware,
	asyncHandler(async (req, res, next) => {
		try {
			const deletedEvent = await Event.findByIdAndDelete(req.params.id)
			res.json(deletedEvent)
		} catch (error) {
			next(error)
		}
	})
)

export default router
