// backend/controllers/userController.js
import User from '../models/User.js'

// Create a new user
const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body)
    const savedUser = await newUser.save()
    res.status(201).json(savedUser)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({ isDeleted: false })
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Get user by number
const getUserByNumber = async (req, res) => {
  try {
    const user = await User.findOne({ number: req.params.number, isDeleted: false })
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Update user by ID
const updateUser = async (req, res) => {
  try {
    const existingUser = await User.findOne({ number: req.params.number});

    if (!existingUser) {
      return res.status(404).json({ message: 'User not found' });
    }
	else if(existingUser.isDeleted == true){
		return res.status(410).json({ message: 'User is deleted (soft)' });
	}
3	// Update user fields
	existingUser.name = req.body.name || existingUser.name
	existingUser.number = req.body.number || existingUser.number
	existingUser.email = req.body.email || existingUser.email
	existingUser.password = req.body.password || existingUser.password
	existingUser.isDeleted = req.body.isDeleted !== undefined ? req.body.isDeleted : existingUser.isDeleted	
	
	// Save the updated user
	const updatedUser = await existingUser.save()

	// return reduced user
	const { name } = updatedUser
	const reducedUser = { name }

	res.status(200).json({reducedUser})
	
} catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Soft delete user by ID
const softDeleteUser = async (req, res) => {
  
	try {
		const deletedUser = await User.findOne({ number: req.params.number });

		if (!deletedUser) {
		  return res.status(404).json({ message: 'User not found' });
		}
	
		// Update user fields for soft delete
		deletedUser.isDeleted = true

		// Save the updated user
		const softDeletedUser = await deletedUser.save()

		// return reduced user
		const { name, isDeleted } = softDeletedUser
		const reducedUser = { name, isDeleted }

		res.status(200).json({reducedUser})
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export { createUser, getAllUsers, getUserByNumber, updateUser, softDeleteUser }
