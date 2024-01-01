// backend/routes/api/leadRoutes.js
import express from 'express';
import {
  createLead,
  getAllLeads,
  getLeadById,
  updateLead,
  softDeleteLead,
} from '../../controllers/LeadController.js';

const router = express.Router();

// Create a new lead
router.post('/', createLead);

// Get all leads
router.get('/', getAllLeads);

// Get lead by ID
router.get('/:id', getLeadById);

// Update lead by ID
router.put('/:id', updateLead);

// Soft delete lead by ID
router.delete('/:id', softDeleteLead);

export default router;
