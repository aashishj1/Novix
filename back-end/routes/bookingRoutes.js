const express = require("express");
const router = express.Router();
const {
  createBooking,
  payBooking,
  cancelBooking,
  getUserBookings,
  getTherapistBookings,
} = require("../controllers/bookingController");

// Create a new booking
router.post("/booking", createBooking);

// Mark payment as successful
router.patch("/booking/:id/pay", payBooking);

// Cancel a booking
router.patch("/booking/:id/cancel", cancelBooking);

// Get all bookings for a user
router.get("/booking/user/:userId", getUserBookings);

// Get all bookings for a therapist
router.get("/booking/therapist/:therapistId", getTherapistBookings);

module.exports = router;
