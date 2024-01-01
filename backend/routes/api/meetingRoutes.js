// backend/routes/api/meetingRoutes.js
import express from 'express';
import {
  createMeeting,
  getAllMeetings,
  getMeetingById,
  updateMeeting,
  softDeleteMeeting,
} from '../../controllers/MeetingController.js';

const router = express.Router();

// Create a new meeting
router.post('/', createMeeting);

// Get all meetings
router.get('/', getAllMeetings);

// Get meeting by ID
router.get('/:id', getMeetingById);

// Update meeting by ID
router.put('/:id', updateMeeting);

// Soft delete meeting by ID
router.delete('/:id', softDeleteMeeting);

export default router;
