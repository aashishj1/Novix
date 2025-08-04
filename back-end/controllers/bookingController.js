const Booking = require("../models/bookingModel");
const Therapist = require("../models/therapistModel");

// Helper function to check slot availability
const isSlotAvailable = async (therapistId, date, time) => {
  const therapist = await Therapist.findById(therapistId);
  if (!therapist) return false;

  const daySlots = therapist.availableSlots.find((slot) => slot.date === date);
  if (!daySlots) return false;

  return daySlots.times.includes(time);
};

const createBooking = async (req, res) => {
  try {
    const { userId, therapistId, therapyType, issueType, date, time } =
      req.body;

    if (
      !userId ||
      !therapistId ||
      !therapyType ||
      !issueType ||
      !date ||
      !time
    ) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields" });
    }

    // Check if slot is available
    const available = await isSlotAvailable(therapistId, date, time);
    if (!available) {
      return res
        .status(400)
        .json({ message: "Selected slot is not available" });
    }

    // Check if slot is already booked
    const existingBooking = await Booking.findOne({
      therapistId,
      date,
      time,
      status: { $in: ["pending", "confirmed"] },
    });
    if (existingBooking) {
      return res
        .status(400)
        .json({ message: "Selected slot is already booked" });
    }

    const booking = new Booking({
      userId,
      therapistId,
      therapyType,
      issueType,
      date,
      time,
      status: "pending",
      paymentStatus: "unpaid",
    });

    await booking.save();

    res.status(201).json({ message: "Booking created successfully", booking });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const payBooking = async (req, res) => {
  try {
    const bookingId = req.params.id;

    const booking = await Booking.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    booking.status = "confirmed";
    booking.paymentStatus = "paid";

    await booking.save();

    res
      .status(200)
      .json({ message: "Payment successful, booking confirmed", booking });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const cancelBooking = async (req, res) => {
  try {
    const bookingId = req.params.id;

    const booking = await Booking.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    // TODO: Add logic to check if cancellation is allowed based on time

    booking.status = "cancelled";
    // TODO: Add refund logic here
    booking.paymentStatus = "refunded";

    await booking.save();

    res.status(200).json({ message: "Booking cancelled", booking });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getUserBookings = async (req, res) => {
  try {
    const userId = req.params.userId;

    const bookings = await Booking.find({ userId }).populate("therapistId");

    res.status(200).json({ bookings });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getTherapistBookings = async (req, res) => {
  try {
    const therapistId = req.params.therapistId;

    const bookings = await Booking.find({ therapistId }).populate("userId");

    res.status(200).json({ bookings });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  createBooking,
  payBooking,
  cancelBooking,
  getUserBookings,
  getTherapistBookings,
};
