import express from 'express'
import User from '../modules/User.js'
import asyncHandler from 'express-async-handler'
import authMiddleware from '../middleware/authMiddleware.js'
import bcrypt from 'bcrypt'

const saltRounds = 10
const router = express.Router()

// Route to get all users
router.get(
	'/',
	authMiddleware,
	asyncHandler(async (req, res, next) => {
		try {
			const users = await User.find()
			res.json(users)
		} catch (err) {
			next(err)
		}
	})
)

router.post(
	'/',
	authMiddleware,
	asyncHandler(async (req, res, next) => {
		const { username, email, password } = req.body

		// Hash the password
		const hashedPassword = await bcrypt.hash(password, saltRounds)

		const user = new User({
			username,
			email,
			password: hashedPassword
		})

		try {
			const newUser = await user.save()
			res.status(201).json(newUser)
		} catch (error) {
			next(error)
		}
	})
)

export default router
