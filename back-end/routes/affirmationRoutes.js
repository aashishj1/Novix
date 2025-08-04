const express = require("express");
const router = express.Router();
const {
  getAllAffirmations,
  markFavorite,
  getUserFavorites,
} = require("../controllers/affirmationController");
const { authenticateJWT } = require("../middleware/authMiddleware"); // Assuming JWT middleware exists

// Get all affirmations
router.get("/affirmations", authenticateJWT, getAllAffirmations);

// Mark or unmark an affirmation as favorite
router.post("/affirmations/favorite", authenticateJWT, markFavorite);

// Get user's favorite affirmations
router.get("/affirmations/favorite/:userId", authenticateJWT, getUserFavorites);

module.exports = router;
