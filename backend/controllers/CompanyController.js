// backend/controllers/CompanyController.js
import Company from '../models/Company.js';

// Create a new company
const createCompany = async (req, res) => {
  try {
    const newCompany = new Company(req.body);
    const savedCompany = await newCompany.save();
    res.status(201).json(savedCompany);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all companies
const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find({ isDeleted: false });
    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get company by ID
const getCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }
    res.status(200).json(company);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update company by ID
const updateCompany = async (req, res) => {
  try {
    const existingCompany = await Company.findById(req.params.id);

    if (!existingCompany) {
      return res.status(404).json({ message: 'Company not found' });
    }

    // Update company fields
    existingCompany.name = req.body.name || existingCompany.name;
    existingCompany.industry = req.body.industry || existingCompany.industry;
    existingCompany.size = req.body.size || existingCompany.size;
    existingCompany.location = req.body.location || existingCompany.location;
    existingCompany.isDeleted = req.body.isDeleted !== undefined ? req.body.isDeleted : existingCompany.isDeleted;

    // Save the updated company
    const updatedCompany = await existingCompany.save();

    // return reduced company
    const { name, industry, size, location } = updatedCompany;
    const reducedCompany = { name, industry, size, location };

    res.status(200).json({ reducedCompany });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Soft delete company by ID
const softDeleteCompany = async (req, res) => {
  try {
    const deletedCompany = await Company.findById(req.params.id);

    if (!deletedCompany) {
      return res.status(404).json({ message: 'Company not found' });
    }

    // Update company fields for soft delete
    deletedCompany.isDeleted = true;

    // Save the updated company
    const softDeletedCompany = await deletedCompany.save();

    // return reduced company
    const { name, industry, size, location, isDeleted } = softDeletedCompany;
    const reducedCompany = { name, industry, size, location, isDeleted };

    res.status(200).json({ reducedCompany });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { createCompany, getAllCompanies, getCompanyById, updateCompany, softDeleteCompany };
