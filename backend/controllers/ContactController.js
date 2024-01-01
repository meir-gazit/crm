// backend/controllers/ContactController.js
import Contact from '../models/Contact.js';

// Create a new contact
const createContact = async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all contacts
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({ isDeleted: false });
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get contact by ID
const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update contact by ID
const updateContact = async (req, res) => {
  try {
    const existingContact = await Contact.findById(req.params.id);

    if (!existingContact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    // Update contact fields
    existingContact.firstName = req.body.firstName || existingContact.firstName;
    existingContact.lastName = req.body.lastName || existingContact.lastName;
    existingContact.email = req.body.email || existingContact.email;
    existingContact.phone = req.body.phone || existingContact.phone;
    existingContact.address = req.body.address || existingContact.address;
    existingContact.isDeleted = req.body.isDeleted !== undefined ? req.body.isDeleted : existingContact.isDeleted;

    // Save the updated contact
    const updatedContact = await existingContact.save();

    // return reduced contact
    const { firstName, lastName, email } = updatedContact;
    const reducedContact = { firstName, lastName, email };

    res.status(200).json({ reducedContact });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Soft delete contact by ID
const softDeleteContact = async (req, res) => {
  try {
    const deletedContact = await Contact.findById(req.params.id);

    if (!deletedContact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    // Update contact fields for soft delete
    deletedContact.isDeleted = true;

    // Save the updated contact
    const softDeletedContact = await deletedContact.save();

    // return reduced contact
    const { firstName, lastName, email, isDeleted } = softDeletedContact;
    const reducedContact = { firstName, lastName, email, isDeleted };

    res.status(200).json({ reducedContact });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { createContact, getAllContacts, getContactById, updateContact, softDeleteContact };
