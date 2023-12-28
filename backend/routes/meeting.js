import express from 'express'
import Meeting from '../modules/Meeting.js'
import asyncHandler from 'express-async-handler'
import authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router()

router.post(
	'/',
	authMiddleware,
	asyncHandler(async (req, res, next) => {
		try {
			const newMeeting = await Meeting.create(req.body)
			res.status(201).json(newMeeting)
		} catch (error) {
			next(error)
		}
	})
)

// Read All Meetings
router.get(
	'/',
	authMiddleware,
	asyncHandler(async (req, res, next) => {
		try {
			const meetings = await Meeting.find()
			res.json(meetings)
		} catch (error) {
			next(error)
		}
	})
)

// Read Meeting by ID
router.get(
	'/:id',
	authMiddleware,
	asyncHandler(async (req, res, next) => {
		try {
			const meeting = await Meeting.findById(req.params.id)
			res.json(meeting)
		} catch (error) {
			next(error)
		}
	})
)

// Update Meeting by ID
router.put(
	'/:id',
	authMiddleware,
	asyncHandler(async (req, res, next) => {
		try {
			const updatedMeeting = await Meeting.findByIdAndUpdate(
				req.params.id,
				req.body,
				{ new: true }
			)
			res.json(updatedMeeting)
		} catch (error) {
			next(error)
		}
	})
)

// Soft Delete Meeting (update isDeleted to true)
router.put(
	'/:id/delete',
	authMiddleware,
	asyncHandler(async (req, res, next) => {
		try {
			const softDeletedMeeting = await Meeting.findByIdAndUpdate(
				req.params.id,
				{ isDeleted: true },
				{ new: true }
			)
			res.json(softDeletedMeeting)
		} catch (error) {
			next(error)
		}
	})
)

// Permanently Delete Meeting
router.delete(
	'/:id',
	authMiddleware,
	asyncHandler(async (req, res, next) => {
		try {
			const deletedMeeting = await Meeting.findByIdAndDelete(
				req.params.id
			)
			res.json(deletedMeeting)
		} catch (error) {
			next(error)
		}
	})
)

export default router
