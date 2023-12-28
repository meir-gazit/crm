import express from 'express'
import Company from '../modules/Company.js'
import asyncHandler from 'express-async-handler'
import authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router()

router.post(
	'/',
	authMiddleware,
	asyncHandler(async (req, res, next) => {
		try {
			const newCompany = await Company.create(req.body)
			res.status(201).json(newCompany)
		} catch (error) {
			next(error)
		}
	})
)

// Read All Companies
router.get(
	'/',
	authMiddleware,
	asyncHandler(async (req, res, next) => {
		try {
			const companies = await Company.find()
			res.json(companies)
		} catch (error) {
			next(error)
		}
	})
)

// Read Company by ID
router.get(
	'/:id',
	authMiddleware,
	asyncHandler(async (req, res, next) => {
		try {
			const company = await Company.findById(req.params.id)
			res.json(company)
		} catch (error) {
			next(error)
		}
	})
)

// Update Company by ID
router.put(
	'/:id',
	authMiddleware,
	asyncHandler(async (req, res, next) => {
		try {
			const updatedCompany = await Company.findByIdAndUpdate(
				req.params.id,
				req.body,
				{ new: true }
			)
			res.json(updatedCompany)
		} catch (error) {
			next(error)
		}
	})
)

// Soft Delete Company (update isDeleted to true)
router.put(
	'/:id',
	authMiddleware,
	asyncHandler(async (req, res, next) => {
		try {
			const softDeletedCompany = await Company.findByIdAndUpdate(
				req.params.id,
				{ isDeleted: true },
				{ new: true }
			)
			res.json(softDeletedCompany)
		} catch (error) {
			next(error)
		}
	})
)

export default router
