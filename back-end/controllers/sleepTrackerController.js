const SleepTracker = require("../models/sleepTrackerModel");
const mongoose = require("mongoose");

const addSleepLog = async (req, res) => {
  try {
    const { userId, date, hoursSlept, note } = req.body;
    if (!userId || !date || !hoursSlept) {
      return res.status(400).json({ success: false, message: "userId, date, and hoursSlept are required" });
    }

    const sleepLog = new SleepTracker({
      userId,
      date,
      hoursSlept,
      note,
    });

    await sleepLog.save();

    res.status(201).json({ success: true, message: "Sleep log added", sleepLog });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

const getUserSleepLogs = async (req, res) => {
  try {
    const userId = req.params.userId;
    const sleepLogs = await SleepTracker.find({ userId }).sort({ date: -1 });

    res.status(200).json({ success: true, sleepLogs });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

const getWeeklySleepAverage = async (req, res) => {
  try {
    const userId = req.params.userId;
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    const result = await SleepTracker.aggregate([
      { $match: { userId: mongoose.Types.ObjectId(userId), date: { $gte: oneWeekAgo } } },
      { $group: { _id: null, avgHours: { $avg: "$hoursSlept" } } },
    ]);

    const avgHours = result.length > 0 ? result[0].avgHours : 0;

    res.status(200).json({ success: true, avgHours });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

module.exports = {
  addSleepLog,
  getUserSleepLogs,
  getWeeklySleepAverage,
};
