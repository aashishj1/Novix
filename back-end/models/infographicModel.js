const mongoose = require("mongoose");

const infographicSchema = new mongoose.Schema({
  title: { type: String, required: true },
  imageUrl: { type: String, required: true },
  description: { type: String },
  tags: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Infographic", infographicSchema);
