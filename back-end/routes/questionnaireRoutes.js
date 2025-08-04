const express = require("express");
const router = express.Router();
const { submitQuiz, getUserResults } = require("../controllers/questionnaireController");
const { authenticateJWT } = require("../middleware/authMiddleware"); // Assuming JWT middleware exists

// Submit a quiz
router.post("/quiz", authenticateJWT, submitQuiz);

// Get quiz results for a user
router.get("/quiz/user/:id", authenticateJWT, getUserResults);

module.exports = router;
