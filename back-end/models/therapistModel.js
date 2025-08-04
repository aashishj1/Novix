const mongoose = require("mongoose");

const availableSlotSchema = new mongoose.Schema({
  date: { type: String, required: true },
  times: [{ type: String, required: true }],
});

const therapistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  phone: { type: String, required: true },
  profilePicture: { type: String, default: null },
  specialization: [{ type: String, required: true }],
  languages: [{ type: String, required: true }],
  experience: { type: Number, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, default: 0 },
  bio: { type: String, required: true },
  availableSlots: [availableSlotSchema],
});

module.exports = mongoose.model("Therapist", therapistSchema);
