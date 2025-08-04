const SelfCareChecklist = require("../models/selfCareChecklistModel");

const createChecklist = async (req, res) => {
  try {
    const { userId, items } = req.body;
    if (!userId || !items || !Array.isArray(items)) {
      return res.status(400).json({ success: false, message: "userId and items array are required" });
    }

    const checklist = new SelfCareChecklist({ userId, items });
    await checklist.save();

    res.status(201).json({ success: true, message: "Checklist created", checklist });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

const getChecklistByUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const checklist = await SelfCareChecklist.findOne({ userId });

    if (!checklist) {
      return res.status(404).json({ success: false, message: "Checklist not found" });
    }

    res.status(200).json({ success: true, checklist });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

const updateChecklistItem = async (req, res) => {
  try {
    const checklistId = req.params.id;
    const { task, completed } = req.body;

    const checklist = await SelfCareChecklist.findById(checklistId);
    if (!checklist) {
      return res.status(404).json({ success: false, message: "Checklist not found" });
    }

    const item = checklist.items.id(task);
    if (!item) {
      return res.status(404).json({ success: false, message: "Task not found in checklist" });
    }

    if (typeof completed === "boolean") {
      item.completed = completed;
    }

    await checklist.save();

    res.status(200).json({ success: true, message: "Checklist item updated", checklist });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

module.exports = {
  createChecklist,
  getChecklistByUser,
  updateChecklistItem,
};
