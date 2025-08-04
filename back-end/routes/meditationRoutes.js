const express = require("express");
const router = express.Router();
const {
  addMeditation,
  getMeditationsByUser,
  toggleFavorite,
} = require("../controllers/meditationController");
const { authenticateJWT } = require("../middleware/authMiddleware"); // Assuming JWT middleware exists

// Add a meditation session
router.post("/meditation", authenticateJWT, addMeditation);

// Get meditation sessions for a user
router.get("/meditation/user/:id", authenticateJWT, getMeditationsByUser);

// Toggle favorite status of a meditation session
router.patch("/meditation/fav/:id", authenticateJWT, toggleFavorite);

module.exports = router;
