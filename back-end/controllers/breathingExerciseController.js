const BreathingExercise = require("../models/breathingExerciseModel");

const addBreathingExercise = async (req, res) => {
  try {
    const { userId, exerciseType, durationMinutes } = req.body;
    if (!userId || !exerciseType || !durationMinutes) {
      return res.status(400).json({ success: false, message: "userId, exerciseType, and durationMinutes are required" });
    }

    const breathingExercise = new BreathingExercise({
      userId,
      exerciseType,
      durationMinutes,
    });

    await breathingExercise.save();

    res.status(201).json({ success: true, message: "Breathing exercise session added", breathingExercise });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

const getBreathingExercisesByUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const exercises = await BreathingExercise.find({ userId }).sort({ createdAt: -1 });

    res.status(200).json({ success: true, exercises });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

const toggleFavorite = async (req, res) => {
  try {
    const exerciseId = req.params.id;

    const exercise = await BreathingExercise.findById(exerciseId);
    if (!exercise) {
      return res.status(404).json({ success: false, message: "Breathing exercise session not found" });
    }

    exercise.isFavorite = !exercise.isFavorite;
    await exercise.save();

    res.status(200).json({ success: true, message: "Favorite status toggled", exercise });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

module.exports = {
  addBreathingExercise,
  getBreathingExercisesByUser,
  toggleFavorite,
};
