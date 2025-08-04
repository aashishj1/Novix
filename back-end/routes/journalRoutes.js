const express = require("express");
const router = express.Router();
const {
  createJournal,
  getJournalsByUser,
  updateJournal,
  deleteJournal,
} = require("../controllers/journalController");
const { authenticateJWT } = require("../middleware/authMiddleware"); // Assuming JWT middleware exists

// Create a journal entry
router.post("/journal", authenticateJWT, createJournal);

// Get all journal entries for a user
router.get("/journal/user/:id", authenticateJWT, getJournalsByUser);

// Update a journal entry
router.put("/journal/:id", authenticateJWT, updateJournal);

// Delete a journal entry
router.delete("/journal/:id", authenticateJWT, deleteJournal);

module.exports = router;
