const express = require('express')
const router = express.Router()
const User = require('../modules/User')
const asyncHandler = require('express-async-handler')
const authMiddleware = require('../middleware/authMiddleware')
const bcrypt = require('bcrypt')

const saltRounds = 10;

// Route to get all users
router.get('/', authMiddleware, asyncHandler(async (req, res, next) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (err) {
    next(error)
  }
}))

router.post('/', authMiddleware, asyncHandler(async (req, res, next) => {
	const { username, email, password } = req.body
  
	// Hash the password
	const hashedPassword = await bcrypt.hash(password, saltRounds)
  
	const user = new User({
	  username: username,
	  email: email,
	  password: hashedPassword,
	});
  
	try {
	  const newUser = await user.save();
	  res.status(201).json(newUser);
	} catch (error) {
	  next(error);
	}
  }))

module.exports = router