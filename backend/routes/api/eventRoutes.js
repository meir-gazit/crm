// backend/routes/api/eventRoutes.js
import express from 'express';
import {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  softDeleteEvent,
} from '../../controllers/EventController.js';

const router = express.Router();

// Create a new event
router.post('/', createEvent);

// Get all events
router.get('/', getAllEvents);

// Get event by ID
router.get('/:id', getEventById);

// Update event by ID
router.put('/:id', updateEvent);

// Soft delete event by ID
router.delete('/:id', softDeleteEvent);

export default router;
