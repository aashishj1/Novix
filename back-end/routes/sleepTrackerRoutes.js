const express = require("express");
const router = express.Router();
const {
  addSleepLog,
  getUserSleepLogs,
  getWeeklySleepAverage,
} = require("../controllers/sleepTrackerController");
const { authenticateJWT } = require("../middleware/authMiddleware"); // Assuming JWT middleware exists

// Add a sleep log
router.post("/sleep", authenticateJWT, addSleepLog);

// Get sleep logs for a user
router.get("/sleep/user/:userId", authenticateJWT, getUserSleepLogs);

// Get weekly average sleep hours for a user
router.get("/sleep/user/:userId/weekly-average", authenticateJWT, getWeeklySleepAverage);

module.exports = router;
