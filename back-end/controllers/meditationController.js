const Meditation = require("../models/meditationModel");

const addMeditation = async (req, res) => {
  try {
    const { userId, contentId, minutesPracticed } = req.body;
    if (!userId || !contentId || !minutesPracticed) {
      return res.status(400).json({ success: false, message: "userId, contentId, and minutesPracticed are required" });
    }

    const meditation = new Meditation({
      userId,
      contentId,
      minutesPracticed,
    });

    await meditation.save();

    res.status(201).json({ success: true, message: "Meditation session added", meditation });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

const getMeditationsByUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const meditations = await Meditation.find({ userId }).sort({ createdAt: -1 });

    res.status(200).json({ success: true, meditations });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

const toggleFavorite = async (req, res) => {
  try {
    const meditationId = req.params.id;

    const meditation = await Meditation.findById(meditationId);
    if (!meditation) {
      return res.status(404).json({ success: false, message: "Meditation session not found" });
    }

    meditation.isFavorite = !meditation.isFavorite;
    await meditation.save();

    res.status(200).json({ success: true, message: "Favorite status toggled", meditation });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

module.exports = {
  addMeditation,
  getMeditationsByUser,
  toggleFavorite,
};
