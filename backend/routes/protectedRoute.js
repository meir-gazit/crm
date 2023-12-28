import express from 'express'
import authMiddleware from '../middleware/authMiddleware'

const router = express.Router()

// Protected route
router.get('/protected', authMiddleware, (req, res) => {
	res.json({ message: 'This is a protected route', userId: req.userId })
})

export default router
