// backend/controllers/EventController.js
import Event from '../models/Event.js';

// Create a new event
const createEvent = async (req, res) => {
  try {
    const newEvent = new Event(req.body);
    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all events
const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find({ isDeleted: false });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get event by ID
const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update event by ID
const updateEvent = async (req, res) => {
  try {
    const existingEvent = await Event.findById(req.params.id);

    if (!existingEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }

    // Update event fields
    existingEvent.name = req.body.name || existingEvent.name;
    existingEvent.date = req.body.date || existingEvent.date;
    existingEvent.location = req.body.location || existingEvent.location;
    existingEvent.attendees = req.body.attendees || existingEvent.attendees;
    existingEvent.organizer = req.body.organizer || existingEvent.organizer;
    existingEvent.description = req.body.description || existingEvent.description;
    existingEvent.isDeleted = req.body.isDeleted !== undefined ? req.body.isDeleted : existingEvent.isDeleted;
    existingEvent.associatedContact = req.body.associatedContact || existingEvent.associatedContact;
    existingEvent.associatedCompany = req.body.associatedCompany || existingEvent.associatedCompany;

    // Save the updated event
    const updatedEvent = await existingEvent.save();

    // return reduced event
    const { name, date, location, attendees, organizer, description, associatedContact, associatedCompany } = updatedEvent;
    const reducedEvent = { name, date, location, attendees, organizer, description, associatedContact, associatedCompany };

    res.status(200).json({ reducedEvent });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Soft delete event by ID
const softDeleteEvent = async (req, res) => {
  try {
    const deletedEvent = await Event.findById(req.params.id);

    if (!deletedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }

    // Update event fields for soft delete
    deletedEvent.isDeleted = true;

    // Save the updated event
    const softDeletedEvent = await deletedEvent.save();

    // return reduced event
    const { name, date, location, attendees, organizer, description, associatedContact, associatedCompany, isDeleted } = softDeletedEvent;
    const reducedEvent = { name, date, location, attendees, organizer, description, associatedContact, associatedCompany, isDeleted };

    res.status(200).json({ reducedEvent });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { createEvent, getAllEvents, getEventById, updateEvent, softDeleteEvent };
