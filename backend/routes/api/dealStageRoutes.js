// backend/routes/api/dealStageRoutes.js
import express from 'express';
import {
  createDealStage,
  getAllDealStages,
  getDealStageById,
  updateDealStage,
  softDeleteDealStage,
} from '../../controllers/DealStageController.js';

const router = express.Router();

// Create a new deal stage
router.post('/', createDealStage);

// Get all deal stages
router.get('/', getAllDealStages);

// Get deal stage by ID
router.get('/:id', getDealStageById);

// Update deal stage by ID
router.put('/:id', updateDealStage);

// Soft delete deal stage by ID
router.delete('/:id', softDeleteDealStage);

export default router;
