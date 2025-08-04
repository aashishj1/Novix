const express = require("express");
const router = express.Router();
const {
  createChecklist,
  getChecklistByUser,
  updateChecklistItem,
} = require("../controllers/selfCareChecklistController");
const { authenticateJWT } = require("../middleware/authMiddleware"); // Assuming JWT middleware exists

// Create a self-care checklist
router.post("/selfcare", authenticateJWT, createChecklist);

// Get self-care checklist for a user
router.get("/selfcare/user/:id", authenticateJWT, getChecklistByUser);

// Update a checklist item
router.patch("/selfcare/:id", authenticateJWT, updateChecklistItem);

module.exports = router;
