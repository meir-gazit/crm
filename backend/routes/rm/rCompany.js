import express from 'express'
import Company from '../models/relationshipManagement/Company'

const router = express.Router()

// Create Company
router.post('/companies', async (req, res) => {
  try {
    const newCompany = await Company.create(req.body)
    res.status(201).json(newCompany)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Read All Companies
router.get('/companies', async (req, res) => {
  try {
    const companies = await Company.find()
    res.json(companies)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Read Company by ID
router.get('/companies/:id', async (req, res) => {
  try {
    const company = await Company.findById(req.params.id)
    res.json(company)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Update Company by ID
router.put('/companies/:id', async (req, res) => {
  try {
    const updatedCompany = await Company.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.json(updatedCompany)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Soft Delete Company (update isDeleted to true)
router.put('/companies/:id/delete', async (req, res) => {
  try {
    const softDeletedCompany = await Company.findByIdAndUpdate(
      req.params.id,
      { isDeleted: true },
      { new: true }
    )
    res.json(softDeletedCompany)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router
