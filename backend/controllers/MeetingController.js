// backend/controllers/MeetingController.js
import Meeting from '../models/Meeting.js';

// Create a new meeting
const createMeeting = async (req, res) => {
  try {
    const newMeeting = new Meeting(req.body);
    const savedMeeting = await newMeeting.save();
    res.status(201).json(savedMeeting);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all meetings
const getAllMeetings = async (req, res) => {
  try {
    const meetings = await Meeting.find({ isDeleted: false });
    res.status(200).json(meetings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get meeting by ID
const getMeetingById = async (req, res) => {
  try {
    const meeting = await Meeting.findById(req.params.id);
    if (!meeting) {
      return res.status(404).json({ message: 'Meeting not found' });
    }
    res.status(200).json(meeting);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update meeting by ID
const updateMeeting = async (req, res) => {
  try {
    const existingMeeting = await Meeting.findById(req.params.id);

    if (!existingMeeting) {
      return res.status(404).json({ message: 'Meeting not found' });
    }

    // Update meeting fields
    existingMeeting.title = req.body.title || existingMeeting.title;
    existingMeeting.date = req.body.date || existingMeeting.date;
    existingMeeting.location = req.body.location || existingMeeting.location;
    existingMeeting.participants = req.body.participants || existingMeeting.participants;
    existingMeeting.followUpActions = req.body.followUpActions || existingMeeting.followUpActions;
    existingMeeting.isDeleted = req.body.isDeleted !== undefined ? req.body.isDeleted : existingMeeting.isDeleted;
    existingMeeting.associatedContact = req.body.associatedContact || existingMeeting.associatedContact;
    existingMeeting.associatedCompany = req.body.associatedCompany || existingMeeting.associatedCompany;

    // Save the updated meeting
    const updatedMeeting = await existingMeeting.save();

    // return reduced meeting
    const { title, date, location, participants, followUpActions, associatedContact, associatedCompany } = updatedMeeting;
    const reducedMeeting = { title, date, location, participants, followUpActions, associatedContact, associatedCompany };

    res.status(200).json({ reducedMeeting });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Soft delete meeting by ID
const softDeleteMeeting = async (req, res) => {
  try {
    const deletedMeeting = await Meeting.findById(req.params.id);

    if (!deletedMeeting) {
      return res.status(404).json({ message: 'Meeting not found' });
    }

    // Update meeting fields for soft delete
    deletedMeeting.isDeleted = true;

    // Save the updated meeting
    const softDeletedMeeting = await deletedMeeting.save();

    // return reduced meeting
    const { title, date, location, participants, followUpActions, isDeleted, associatedContact, associatedCompany } = softDeletedMeeting;
    const reducedMeeting = { title, date, location, participants, followUpActions, isDeleted, associatedContact, associatedCompany };

    res.status(200).json({ reducedMeeting });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { createMeeting, getAllMeetings, getMeetingById, updateMeeting, softDeleteMeeting };
