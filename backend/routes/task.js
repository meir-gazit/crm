import express from 'express'
import expressPromiseRouter from 'express-promise-router'
import Task from '../modules/Task.js'
import asyncHandler from 'express-async-handler'
import authMiddleware from '../middleware/authMiddleware.js'

const router = expressPromiseRouter()

router.post(
	'/',
	authMiddleware,
	asyncHandler(async (req, res, next) => {
		const task = new Task({
			title: req.body.title,
			dueDate: req.body.dueDate,
			priority: req.body.priority,
			status: req.body.status,
			assignedTo: req.body.assignedTo,
			associatedContact: null,
			associatedCompany: null,
			associatedOpportunity: null
		})

		try {
			const newTask = await task.save()
			res.status(201).json(newTask)
		} catch (err) {
			next(err)
		}
	})
)

// Route to get all tasks
router.get(
	'/',
	authMiddleware,
	asyncHandler(async (req, res, next) => {
		try {
			const tasks = await Task.find()
			res.json(tasks)
		} catch (err) {
			next(err)
		}
	})
)

export default router
