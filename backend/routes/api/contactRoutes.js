// backend/routes/api/contactRoutes.js
import express from 'express';
import {
  createContact,
  getAllContacts,
  getContactById,
  updateContact,
  softDeleteContact,
} from '../../controllers/ContactController.js';

const router = express.Router();

// Create a new contact
router.post('/', createContact);

// Get all contacts
router.get('/', getAllContacts);

// Get contact by ID
router.get('/:id', getContactById);

// Update contact by ID
router.put('/:id', updateContact);

// Soft delete contact by ID
router.delete('/:id', softDeleteContact);

export default router;
