import express from 'express';
import Opportunity from '../models/relationshipManagement/Opportunity';

const router = express.Router();

// Create Opportunity
router.post('/opportunities', async (req, res) => {
  try {
    const newOpportunity = await Opportunity.create(req.body);
    res.status(201).json(newOpportunity);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read All Opportunities
router.get('/opportunities', async (req, res) => {
  try {
    const opportunities = await Opportunity.find();
    res.json(opportunities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read Opportunity by ID
router.get('/opportunities/:id', async (req, res) => {
  try {
    const opportunity = await Opportunity.findById(req.params.id);
    res.json(opportunity);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update Opportunity by ID
router.put('/opportunities/:id', async (req, res) => {
  try {
    const updatedOpportunity = await Opportunity.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedOpportunity);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Soft Delete Opportunity (update isDeleted to true)
router.put('/opportunities/:id/delete', async (req, res) => {
  try {
    const softDeletedOpportunity = await Opportunity.findByIdAndUpdate(
      req.params.id,
      { isDeleted: true },
      { new: true }
    );
    res.json(softDeletedOpportunity);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Permanently Delete Opportunity
router.delete('/opportunities/:id', async (req, res) => {
  try {
    const deletedOpportunity = await Opportunity.findByIdAndDelete(req.params.id);
    res.json(deletedOpportunity);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
