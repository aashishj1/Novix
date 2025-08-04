const Affirmation = require("../models/affirmationModel");
const FavoriteAffirmation = require("../models/favoriteAffirmationModel");

const getAllAffirmations = async (req, res) => {
  try {
    const affirmations = await Affirmation.find();
    res.status(200).json({ success: true, affirmations });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

const markFavorite = async (req, res) => {
  try {
    const { userId, affirmationId } = req.body;
    if (!userId || !affirmationId) {
      return res.status(400).json({ success: false, message: "userId and affirmationId are required" });
    }

    let favorite = await FavoriteAffirmation.findOne({ userId, affirmationId });
    if (favorite) {
      favorite.isFavorite = !favorite.isFavorite;
      await favorite.save();
    } else {
      favorite = new FavoriteAffirmation({ userId, affirmationId, isFavorite: true });
      await favorite.save();
    }

    res.status(200).json({ success: true, message: "Favorite status updated", favorite });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

const getUserFavorites = async (req, res) => {
  try {
    const userId = req.params.userId;
    const favorites = await FavoriteAffirmation.find({ userId, isFavorite: true }).populate("affirmationId");

    res.status(200).json({ success: true, favorites });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

module.exports = {
  getAllAffirmations,
  markFavorite,
  getUserFavorites,
};
