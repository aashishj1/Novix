const MoodTracker = require("../models/moodTrackerModel");
const { calculateMoodTrends } = require("../utils/analysisUtils");

const addMood = async (req, res) => {
  try {
    const { userId, moodType, note, date } = req.body;
    if (!userId || !moodType) {
      return res.status(400).json({ success: false, message: "userId and moodType are required" });
    }

    const mood = new MoodTracker({
      userId,
      moodType,
      note: note || "",
      date: date ? new Date(date) : new Date(),
    });

    await mood.save();

    res.status(201).json({ success: true, message: "Mood added successfully", mood });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

const getMoodHistory = async (req, res) => {
  try {
    const userId = req.params.id;
    const moods = await MoodTracker.find({ userId }).sort({ date: 1 });

    const trends = calculateMoodTrends(moods);

    res.status(200).json({ success: true, moods, trends });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

module.exports = {
  addMood,
  getMoodHistory,
};
