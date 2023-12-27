import express from 'express'
import DealStage from '../models/relationshipManagement/DealStage'

const router = express.Router()

// Create DealStage
router.post('/deal-stages', async (req, res) => {
  try {
    const newDealStage = await DealStage.create(req.body)
    res.status(201).json(newDealStage)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Read All DealStages
router.get('/deal-stages', async (req, res) => {
  try {
    const dealStages = await DealStage.find()
    res.json(dealStages)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Read DealStage by ID
router.get('/deal-stages/:id', async (req, res) => {
  try {
    const dealStage = await DealStage.findById(req.params.id)
    res.json(dealStage)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Update DealStage by ID
router.put('/deal-stages/:id', async (req, res) => {
  try {
    const updatedDealStage = await DealStage.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.json(updatedDealStage)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Soft Delete DealStage (update isDeleted to true)
router.put('/deal-stages/:id/delete', async (req, res) => {
  try {
    const softDeletedDealStage = await DealStage.findByIdAndUpdate(
      req.params.id,
      { isDeleted: true },
      { new: true }
    )
    res.json(softDeletedDealStage)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Permanently Delete DealStage
router.delete('/deal-stages/:id', async (req, res) => {
  try {
    const deletedDealStage = await DealStage.findByIdAndDelete(req.params.id)
    res.json(deletedDealStage)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router
