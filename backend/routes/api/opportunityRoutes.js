// backend/routes/api/opportunityRoutes.js
import express from 'express';
import {
  createOpportunity,
  getAllOpportunities,
  getOpportunityById,
  updateOpportunity,
  softDeleteOpportunity,
} from '../../controllers/OpportunityController.js';

const router = express.Router();

// Create a new opportunity
router.post('/', createOpportunity);

// Get all opportunities
router.get('/', getAllOpportunities);

// Get opportunity by ID
router.get('/:id', getOpportunityById);

// Update opportunity by ID
router.put('/:id', updateOpportunity);

// Soft delete opportunity by ID
router.delete('/:id', softDeleteOpportunity);

export default router;
