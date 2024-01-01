// backend/controllers/DealStageController.js
import DealStage from '../models/DealStage.js';

// Create a new deal stage
const createDealStage = async (req, res) => {
  try {
    const newDealStage = new DealStage(req.body);
    const savedDealStage = await newDealStage.save();
    res.status(201).json(savedDealStage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all deal stages
const getAllDealStages = async (req, res) => {
  try {
    const dealStages = await DealStage.find({ isDeleted: false });
    res.status(200).json(dealStages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get deal stage by ID
const getDealStageById = async (req, res) => {
  try {
    const dealStage = await DealStage.findById(req.params.id);
    if (!dealStage) {
      return res.status(404).json({ message: 'Deal stage not found' });
    }
    res.status(200).json(dealStage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update deal stage by ID
const updateDealStage = async (req, res) => {
  try {
    const existingDealStage = await DealStage.findById(req.params.id);

    if (!existingDealStage) {
      return res.status(404).json({ message: 'Deal stage not found' });
    }

    // Update deal stage fields
    existingDealStage.name = req.body.name || existingDealStage.name;
    existingDealStage.description = req.body.description || existingDealStage.description;
    existingDealStage.probabilityOfSuccess = req.body.probabilityOfSuccess || existingDealStage.probabilityOfSuccess;
    existingDealStage.durationInStage = req.body.durationInStage || existingDealStage.durationInStage;
    existingDealStage.isDeleted = req.body.isDeleted !== undefined ? req.body.isDeleted : existingDealStage.isDeleted;

    // Save the updated deal stage
    const updatedDealStage = await existingDealStage.save();

    // return reduced deal stage
    const { name, description, probabilityOfSuccess, durationInStage } = updatedDealStage;
    const reducedDealStage = { name, description, probabilityOfSuccess, durationInStage };

    res.status(200).json({ reducedDealStage });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Soft delete deal stage by ID
const softDeleteDealStage = async (req, res) => {
  try {
    const deletedDealStage = await DealStage.findById(req.params.id);

    if (!deletedDealStage) {
      return res.status(404).json({ message: 'Deal stage not found' });
    }

    // Update deal stage fields for soft delete
    deletedDealStage.isDeleted = true;

    // Save the updated deal stage
    const softDeletedDealStage = await deletedDealStage.save();

    // return reduced deal stage
    const { name, description, probabilityOfSuccess, durationInStage, isDeleted } = softDeletedDealStage;
    const reducedDealStage = { name, description, probabilityOfSuccess, durationInStage, isDeleted };

    res.status(200).json({ reducedDealStage });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { createDealStage, getAllDealStages, getDealStageById, updateDealStage, softDeleteDealStage };
