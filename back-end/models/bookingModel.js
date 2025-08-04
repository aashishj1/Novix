const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  therapistId: { type: mongoose.Schema.Types.ObjectId, ref: "Therapist", required: true },
  therapyType: { type: String, enum: ["1:1", "couple", "group", "chat"], required: true },
  issueType: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  status: { type: String, enum: ["pending", "confirmed", "cancelled"], default: "pending" },
  paymentStatus: { type: String, enum: ["unpaid", "paid", "refunded"], default: "unpaid" },
  paymentId: { type: String, default: null },
  feedback: { type: String, default: null },
  rating: { type: Number, default: null },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Booking", bookingSchema);
