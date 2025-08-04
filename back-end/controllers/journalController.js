const Journal = require("../models/journalModel");

const createJournal = async (req, res) => {
  try {
    const { userId, title, content } = req.body;
    if (!userId || !title || !content) {
      return res.status(400).json({ success: false, message: "userId, title, and content are required" });
    }

    const journal = new Journal({ userId, title, content });
    await journal.save();

    res.status(201).json({ success: true, message: "Journal entry created", journal });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

const getJournalsByUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const journals = await Journal.find({ userId }).sort({ createdAt: -1 });

    res.status(200).json({ success: true, journals });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

const updateJournal = async (req, res) => {
  try {
    const journalId = req.params.id;
    const { title, content } = req.body;

    const journal = await Journal.findById(journalId);
    if (!journal) {
      return res.status(404).json({ success: false, message: "Journal entry not found" });
    }

    if (title) journal.title = title;
    if (content) journal.content = content;

    await journal.save();

    res.status(200).json({ success: true, message: "Journal entry updated", journal });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

const deleteJournal = async (req, res) => {
  try {
    const journalId = req.params.id;

    const journal = await Journal.findByIdAndDelete(journalId);
    if (!journal) {
      return res.status(404).json({ success: false, message: "Journal entry not found" });
    }

    res.status(200).json({ success: true, message: "Journal entry deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

module.exports = {
  createJournal,
  getJournalsByUser,
  updateJournal,
  deleteJournal,
};
