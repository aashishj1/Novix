const mongoose = require("mongoose");

const moodTrackerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  moodType: {
    type: String,
    enum: ["happy", "sad", "angry", "anxious", "neutral", "excited", "calm"],
    required: true,
  },
  note: { type: String, default: "" },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("MoodTracker", moodTrackerSchema);
