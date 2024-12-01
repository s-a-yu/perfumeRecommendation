const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // fragrances favorited by user
  fragrance_favorites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Fragrance",
    },
  ],
  // recommendation engine's generated fragrance profile
  fragrance_profile: { type: String}
});

module.exports = mongoose.model("User", userSchema);