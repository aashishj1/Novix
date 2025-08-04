const express = require("express");
const router = express.Router();
const Therapist = require("../models/therapistModel");

// GET /api/therapists - List therapists with optional filters
router.get("/therapists", async (req, res) => {
  try {
    const { specialization, language, minExperience, maxPrice } = req.query;

    let filter = {};

    if (specialization) {
      filter.specialization = { $in: specialization.split(",") };
    }
    if (language) {
      filter.languages = { $in: language.split(",") };
    }
    if (minExperience) {
      filter.experience = { ...filter.experience, $gte: Number(minExperience) };
    }
    if (maxPrice) {
      filter.price = { ...filter.price, $lte: Number(maxPrice) };
    }

    const therapists = await Therapist.find(filter);

    res.status(200).json({ therapists });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// GET /api/therapists/:id - Get therapist by ID with availableSlots
router.get("/therapists/:id", async (req, res) => {
  try {
    const therapist = await Therapist.findById(req.params.id);
    if (!therapist) {
      return res.status(404).json({ message: "Therapist not found" });
    }
    res.status(200).json({ therapist });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
