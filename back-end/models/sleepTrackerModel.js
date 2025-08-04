const mongoose = require("mongoose");

const sleepTrackerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: Date, required: true },
  hoursSlept: { type: Number, required: true },
  note: { type: String },
});

module.exports = mongoose.model("SleepTracker", sleepTrackerSchema);
