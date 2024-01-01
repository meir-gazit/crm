// backend/routes/api/userRoutes.js
import express from 'express'
import {
  createUser,
  getAllUsers,
  getUserByNumber,
  updateUser,
  softDeleteUser,
} from '../../controllers/userController.js'

const router = express.Router()

// Create a new user
router.post('/', createUser)

// Get all users
router.get('/', getAllUsers)

// Get user by number
router.get('/number/:number', getUserByNumber)

// Update user by number
router.get('/update/:number', updateUser)

// Soft delete user by its number
router.get('/delete/:number', softDeleteUser)

export default router
