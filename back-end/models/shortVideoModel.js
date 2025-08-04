const mongoose = require("mongoose");

const shortVideoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true }, // URL to the short video
  description: { type: String },
  tags: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("ShortVideo", shortVideoSchema);
