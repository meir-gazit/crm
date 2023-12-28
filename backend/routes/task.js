const express = require('express')
const router = express.Router()
const Task = require('../modules/Task')
const asyncHandler = require('express-async-handler')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/', authMiddleware, asyncHandler(async (req, res, next) => {
  const task = new Task({
    title: req.body.title,
    dueDate: req.body.dueDate,
    priority: req.body.priority,
    status: req.body.status,
    assignedTo: req.body.assignedTo,
    associatedContact: null,
    associatedCompany: null,
    associatedOpportunity: null,
  })

  try {
    const newTask = await task.save()
    res.status(201).json(newTask)
  } catch (err) {
    next(error)
  }
}))

// Route to get all tasks
router.get('/', authMiddleware, asyncHandler(async (req, res, next) => {
  try {
    const tasks = await Task.find()
    res.json(tasks)
  } catch (err) {
    next(error)
  }
}))



module.exports = router
