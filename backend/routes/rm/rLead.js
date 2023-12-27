import express from 'express'
import Lead from '../models/relationshipManagement/Lead'

const router = express.Router()

// Create Lead
router.post('/leads', async (req, res) => {
  try {
    const newLead = await Lead.create(req.body)
    res.status(201).json(newLead)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Read All Leads
router.get('/leads', async (req, res) => {
  try {
    const leads = await Lead.find()
    res.json(leads)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Read Lead by ID
router.get('/leads/:id', async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id)
    res.json(lead)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Update Lead by ID
router.put('/leads/:id', async (req, res) => {
  try {
    const updatedLead = await Lead.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.json(updatedLead)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Soft Delete Lead (update isDeleted to true)
router.put('/leads/:id/delete', async (req, res) => {
  try {
    const softDeletedLead = await Lead.findByIdAndUpdate(
      req.params.id,
      { isDeleted: true },
      { new: true }
    )
    res.json(softDeletedLead)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Permanently Delete Lead
router.delete('/leads/:id', async (req, res) => {
  try {
    const deletedLead = await Lead.findByIdAndDelete(req.params.id)
    res.json(deletedLead)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router
