import express from 'express'
import Contact from '../models/relationshipManagement/Contact'

const router = express.Router()

// Create Contact
router.post('/contacts', async (req, res) => {
  try {
    const newContact = await Contact.create(req.body)
    res.status(201).json(newContact)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Read All Contacts
router.get('/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find()
    res.json(contacts)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Read Contact by ID
router.get('/contacts/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id)
    res.json(contact)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Update Contact by ID
router.put('/contacts/:id', async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.json(updatedContact)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Soft Delete Contact (update isDeleted to true)
router.put('/contacts/:id/delete', async (req, res) => {
  try {
    const softDeletedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      { isDeleted: true },
      { new: true }
    )
    res.json(softDeletedContact)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Permanently Delete Contact
router.delete('/contacts/:id', async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id)
    res.json(deletedContact)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router
