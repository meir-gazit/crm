// backend/controllers/LeadController.js
import Lead from '../models/Lead.js';

// Create a new lead
const createLead = async (req, res) => {
  try {
    const newLead = new Lead(req.body);
    const savedLead = await newLead.save();
    res.status(201).json(savedLead);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all leads
const getAllLeads = async (req, res) => {
  try {
    const leads = await Lead.find({ isDeleted: false });
    res.status(200).json(leads);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get lead by ID
const getLeadById = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) {
      return res.status(404).json({ message: 'Lead not found' });
    }
    res.status(200).json(lead);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update lead by ID
const updateLead = async (req, res) => {
  try {
    const existingLead = await Lead.findById(req.params.id);

    if (!existingLead) {
      return res.status(404).json({ message: 'Lead not found' });
    }

    // Update lead fields
    existingLead.source = req.body.source || existingLead.source;
    existingLead.status = req.body.status || existingLead.status;
    existingLead.leadScore = req.body.leadScore || existingLead.leadScore;
    existingLead.conversionDate = req.body.conversionDate || existingLead.conversionDate;
    existingLead.isDeleted = req.body.isDeleted !== undefined ? req.body.isDeleted : existingLead.isDeleted;
    existingLead.associatedContact = req.body.associatedContact || existingLead.associatedContact;
    existingLead.associatedCompany = req.body.associatedCompany || existingLead.associatedCompany;

    // Save the updated lead
    const updatedLead = await existingLead.save();

    // return reduced lead
    const { source, status, leadScore, conversionDate, associatedContact, associatedCompany } = updatedLead;
    const reducedLead = { source, status, leadScore, conversionDate, associatedContact, associatedCompany };

    res.status(200).json({ reducedLead });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Soft delete lead by ID
const softDeleteLead = async (req, res) => {
  try {
    const deletedLead = await Lead.findById(req.params.id);

    if (!deletedLead) {
      return res.status(404).json({ message: 'Lead not found' });
    }

    // Update lead fields for soft delete
    deletedLead.isDeleted = true;

    // Save the updated lead
    const softDeletedLead = await deletedLead.save();

    // return reduced lead
    const { source, status, leadScore, conversionDate, isDeleted, associatedContact, associatedCompany } = softDeletedLead;
    const reducedLead = { source, status, leadScore, conversionDate, isDeleted, associatedContact, associatedCompany };

    res.status(200).json({ reducedLead });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { createLead, getAllLeads, getLeadById, updateLead, softDeleteLead };
