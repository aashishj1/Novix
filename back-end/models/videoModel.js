const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  url: { type: String, required: true }, // YouTube or other video URL
  category: { type: String },
  createdAt: { type: Date, default: Date.now },
  tags: [{ type: String }],
});

module.exports = mongoose.model("Video", videoSchema);
