// backend/routes/api/companyRoutes.js
import express from 'express';
import {
  createCompany,
  getAllCompanies,
  getCompanyById,
  updateCompany,
  softDeleteCompany,
} from '../../controllers/CompanyController.js';

const router = express.Router();

// Create a new company
router.post('/', createCompany);

// Get all companies
router.get('/', getAllCompanies);

// Get company by ID
router.get('/:id', getCompanyById);

// Update company by ID
router.put('/:id', updateCompany);

// Soft delete company by ID
router.delete('/:id', softDeleteCompany);

export default router;
