const mongoose = require("mongoose");

const fragranceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String },
  description: { type: String },
  images: [{ type: String }],
});

module.exports = mongoose.model("Fragrance", fragranceSchema);
