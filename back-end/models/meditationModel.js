const mongoose = require("mongoose");

const meditationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  contentId: { type: String, required: true },
  minutesPracticed: { type: Number, required: true },
  isFavorite: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Meditation", meditationSchema);
