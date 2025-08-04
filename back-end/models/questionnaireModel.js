const mongoose = require("mongoose");

const questionnaireSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  testType: { type: String, required: true },
  answers: [{ type: String, required: true }],
  score: { type: Number, required: true },
  result: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Questionnaire", questionnaireSchema);
