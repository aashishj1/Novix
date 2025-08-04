const mongoose = require("mongoose");

const selfCareChecklistSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [
    {
      task: { type: String, required: true },
      completed: { type: Boolean, default: false },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("SelfCareChecklist", selfCareChecklistSchema);
