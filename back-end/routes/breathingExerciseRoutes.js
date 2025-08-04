const express = require("express");
const router = express.Router();
const {
  addBreathingExercise,
  getBreathingExercisesByUser,
  toggleFavorite,
} = require("../controllers/breathingExerciseController");
const { authenticateJWT } = require("../middleware/authMiddleware"); // Assuming JWT middleware exists

// Add a breathing exercise session
router.post("/breathing", authenticateJWT, addBreathingExercise);

// Get breathing exercise sessions for a user
router.get("/breathing/user/:id", authenticateJWT, getBreathingExercisesByUser);

// Toggle favorite status of a breathing exercise session
router.patch("/breathing/fav/:id", authenticateJWT, toggleFavorite);

module.exports = router;
