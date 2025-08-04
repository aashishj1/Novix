const mongoose = require("mongoose");

const userProgressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  contentType: { type: String, enum: ["Blog", "Video", "ShortVideo"], required: true },
  contentId: { type: mongoose.Schema.Types.ObjectId, required: true },
  progress: { type: Number, default: 0 }, // e.g., percentage watched or read
  lastAccessed: { type: Date, default: Date.now },
});

module.exports = mongoose.model("UserProgress", userProgressSchema);
