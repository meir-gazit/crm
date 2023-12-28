import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/User'
import authMiddleware from '../middleware/authMiddleware'

const router = express.Router()

// Signup route
router.post(
	'/signup',
	asyncHandler(async (req, res, next) => {
		const { username, email, password } = req.body

		// Check if the username or email already exists
		const existingUser = await User.findOne({
			$or: [{ username }, { email }]
		})
		if (existingUser) {
			return res
				.status(400)
				.json({ error: 'Username or email already exists' })
		}

		// Hash the password
		const saltRounds = 10
		const hashedPassword = await bcrypt.hash(password, saltRounds)

		const user = new User({
			username,
			email,
			password: hashedPassword
		})

		try {
			const newUser = await user.save()
			res.status(201).json({ success: true, user: newUser })
		} catch (error) {
			next(error)
		}
	})
)

// Login route
router.post(
	'/login',
	asyncHandler(async (req, res, next) => {
		const { username, password } = req.body

		// Find the user by username
		const user = await User.findOne({ username })

		// Check if the user exists
		if (!user) {
			return res
				.status(401)
				.json({ error: 'Invalid username or password' })
		}

		// Compare the provided password with the stored hashed password
		const passwordMatch = await bcrypt.compare(password, user.password)

		if (!passwordMatch) {
			return res
				.status(401)
				.json({ error: 'Invalid username or password' })
		}

		// Generate a JWT token for authentication
		const token = jwt.sign({ userId: user._id }, 'your_secret_key', {
			expiresIn: '1h'
		})

		res.json({ token })
	})
)

export default router
