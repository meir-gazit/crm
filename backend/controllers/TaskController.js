// backend/controllers/TaskController.js
import Task from '../models/Task.js';

// Create a new task
const createTask = async (req, res) => {
  try {
    const newTask = new Task(req.body);
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ isDeleted: false });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get task by ID
const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update task by ID
const updateTask = async (req, res) => {
  try {
    const existingTask = await Task.findById(req.params.id);

    if (!existingTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    // Update task fields
    existingTask.title = req.body.title || existingTask.title;
    existingTask.dueDate = req.body.dueDate || existingTask.dueDate;
    existingTask.priority = req.body.priority || existingTask.priority;
    existingTask.status = req.body.status || existingTask.status;
    existingTask.assignedTo = req.body.assignedTo || existingTask.assignedTo;
    existingTask.isDeleted = req.body.isDeleted !== undefined ? req.body.isDeleted : existingTask.isDeleted;
    existingTask.associatedContact = req.body.associatedContact || existingTask.associatedContact;
    existingTask.associatedCompany = req.body.associatedCompany || existingTask.associatedCompany;
    existingTask.associatedOpportunity = req.body.associatedOpportunity || existingTask.associatedOpportunity;

    // Save the updated task
    const updatedTask = await existingTask.save();

    // return reduced task
    const { title, dueDate, priority, status, assignedTo, associatedContact, associatedCompany, associatedOpportunity } = updatedTask;
    const reducedTask = { title, dueDate, priority, status, assignedTo, associatedContact, associatedCompany, associatedOpportunity };

    res.status(200).json({ reducedTask });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Soft delete task by ID
const softDeleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.findById(req.params.id);

    if (!deletedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    // Update task fields for soft delete
    deletedTask.isDeleted = true;

    // Save the updated task
    const softDeletedTask = await deletedTask.save();

    // return reduced task
    const { title, dueDate, priority, status, assignedTo, isDeleted, associatedContact, associatedCompany, associatedOpportunity } = softDeletedTask;
    const reducedTask = { title, dueDate, priority, status, assignedTo, isDeleted, associatedContact, associatedCompany, associatedOpportunity };

    res.status(200).json({ reducedTask });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { createTask, getAllTasks, getTaskById, updateTask, softDeleteTask };
