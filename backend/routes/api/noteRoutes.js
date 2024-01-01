// backend/routes/api/noteRoutes.js
import express from 'express';
import {
  createNote,
  getAllNotes,
  getNoteById,
  updateNote,
  softDeleteNote,
} from '../../controllers/NoteController.js';

const router = express.Router();

// Create a new note
router.post('/', createNote);

// Get all notes
router.get('/', getAllNotes);

// Get note by ID
router.get('/:id', getNoteById);

// Update note by ID
router.put('/:id', updateNote);

// Soft delete note by ID
router.delete('/:id', softDeleteNote);

export default router;
