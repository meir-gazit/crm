import express from 'express'
import Task from '../models/relationshipManagement/Task'

const router = express.Router()

// Create Task
router.post('/tasks', async (req, res) => {
  try {
    const newTask = await Task.create(req.body)
    res.status(201).json(newTask)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Read All Tasks
router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find()
    res.json(tasks)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Read Task by ID
router.get('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id)
    res.json(task)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Update Task by ID
router.put('/tasks/:id', async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.json(updatedTask)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Soft Delete Task (update isDeleted to true)
router.put('/tasks/:id/delete', async (req, res) => {
  try {
    const softDeletedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { isDeleted: true },
      { new: true }
    )
    res.json(softDeletedTask)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Permanently Delete Task
router.delete('/tasks/:id', async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id)
    res.json(deletedTask)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router
