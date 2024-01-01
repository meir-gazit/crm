// backend/controllers/OpportunityController.js
import Opportunity from '../models/Opportunity.js';

// Create a new opportunity
const createOpportunity = async (req, res) => {
  try {
    const newOpportunity = new Opportunity(req.body);
    const savedOpportunity = await newOpportunity.save();
    res.status(201).json(savedOpportunity);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all opportunities
const getAllOpportunities = async (req, res) => {
  try {
    const opportunities = await Opportunity.find({ isDeleted: false });
    res.status(200).json(opportunities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get opportunity by ID
const getOpportunityById = async (req, res) => {
  try {
    const opportunity = await Opportunity.findById(req.params.id);
    if (!opportunity) {
      return res.status(404).json({ message: 'Opportunity not found' });
    }
    res.status(200).json(opportunity);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update opportunity by ID
const updateOpportunity = async (req, res) => {
  try {
    const existingOpportunity = await Opportunity.findById(req.params.id);

    if (!existingOpportunity) {
      return res.status(404).json({ message: 'Opportunity not found' });
    }

    // Update opportunity fields
    existingOpportunity.name = req.body.name || existingOpportunity.name;
    existingOpportunity.stage = req.body.stage || existingOpportunity.stage;
    existingOpportunity.value = req.body.value || existingOpportunity.value;
    existingOpportunity.closeDate = req.body.closeDate || existingOpportunity.closeDate;
    existingOpportunity.isDeleted = req.body.isDeleted !== undefined ? req.body.isDeleted : existingOpportunity.isDeleted;

    // Save the updated opportunity
    const updatedOpportunity = await existingOpportunity.save();

    // return reduced opportunity
    const { name, stage, value, closeDate } = updatedOpportunity;
    const reducedOpportunity = { name, stage, value, closeDate };

    res.status(200).json({ reducedOpportunity });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Soft delete opportunity by ID
const softDeleteOpportunity = async (req, res) => {
  try {
    const deletedOpportunity = await Opportunity.findById(req.params.id);

    if (!deletedOpportunity) {
      return res.status(404).json({ message: 'Opportunity not found' });
    }

    // Update opportunity fields for soft delete
    deletedOpportunity.isDeleted = true;

    // Save the updated opportunity
    const softDeletedOpportunity = await deletedOpportunity.save();

    // return reduced opportunity
    const { name, stage, value, closeDate, isDeleted } = softDeletedOpportunity;
    const reducedOpportunity = { name, stage, value, closeDate, isDeleted };

    res.status(200).json({ reducedOpportunity });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { createOpportunity, getAllOpportunities, getOpportunityById, updateOpportunity, softDeleteOpportunity };
