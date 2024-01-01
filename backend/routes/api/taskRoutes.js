// backend/routes/api/taskRoutes.js
import express from 'express';
import {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  softDeleteTask,
} from '../../controllers/TaskController.js';

const router = express.Router();

// Create a new task
router.post('/', createTask);

// Get all tasks
router.get('/', getAllTasks);

// Get task by ID
router.get('/:id', getTaskById);

// Update task by ID
router.put('/:id', updateTask);

// Soft delete task by ID
router.delete('/:id', softDeleteTask);

export default router;
