const mongoose = require("mongoose");

const favoriteAffirmationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  affirmationId: { type: mongoose.Schema.Types.ObjectId, ref: "Affirmation", required: true },
  isFavorite: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("FavoriteAffirmation", favoriteAffirmationSchema);
