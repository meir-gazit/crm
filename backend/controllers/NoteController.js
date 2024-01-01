// backend/controllers/NoteController.js
import Note from '../models/Note.js';

// Create a new note
const createNote = async (req, res) => {
  try {
    const newNote = new Note(req.body);
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all notes
const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find({ isDeleted: false });
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get note by ID
const getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update note by ID
const updateNote = async (req, res) => {
  try {
    const existingNote = await Note.findById(req.params.id);

    if (!existingNote) {
      return res.status(404).json({ message: 'Note not found' });
    }

    // Update note fields
    existingNote.title = req.body.title || existingNote.title;
    existingNote.content = req.body.content || existingNote.content;
    existingNote.date = req.body.date || existingNote.date;
    existingNote.isDeleted = req.body.isDeleted !== undefined ? req.body.isDeleted : existingNote.isDeleted;
    existingNote.associatedContact = req.body.associatedContact || existingNote.associatedContact;
    existingNote.associatedCompany = req.body.associatedCompany || existingNote.associatedCompany;
    existingNote.associatedOpportunity = req.body.associatedOpportunity || existingNote.associatedOpportunity;

    // Save the updated note
    const updatedNote = await existingNote.save();

    // return reduced note
    const { title, content, date, associatedContact, associatedCompany, associatedOpportunity } = updatedNote;
    const reducedNote = { title, content, date, associatedContact, associatedCompany, associatedOpportunity };

    res.status(200).json({ reducedNote });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Soft delete note by ID
const softDeleteNote = async (req, res) => {
  try {
    const deletedNote = await Note.findById(req.params.id);

    if (!deletedNote) {
      return res.status(404).json({ message: 'Note not found' });
    }

    // Update note fields for soft delete
    deletedNote.isDeleted = true;

    // Save the updated note
    const softDeletedNote = await deletedNote.save();

    // return reduced note
    const { title, content, date, isDeleted, associatedContact, associatedCompany, associatedOpportunity } = softDeletedNote;
    const reducedNote = { title, content, date, isDeleted, associatedContact, associatedCompany, associatedOpportunity };

    res.status(200).json({ reducedNote });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { createNote, getAllNotes, getNoteById, updateNote, softDeleteNote };
