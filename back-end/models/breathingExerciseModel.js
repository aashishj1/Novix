const mongoose = require("mongoose");

const breathingExerciseSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  exerciseType: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
  isFavorite: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("BreathingExercise", breathingExerciseSchema);
