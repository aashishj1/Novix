const express = require("express");
const router = express.Router();
const { addMood, getMoodHistory } = require("../controllers/moodTrackerController");
const { authenticateJWT } = require("../middleware/authMiddleware"); // Assuming JWT middleware exists

// Add a mood entry
router.post("/mood", authenticateJWT, addMood);

// Get mood history for a user
router.get("/mood/user/:id", authenticateJWT, getMoodHistory);

module.exports = router;
