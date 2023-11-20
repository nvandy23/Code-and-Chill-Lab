const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema(
  {
    name: { type: String, required: true },
    cuisine: {
      type: String,
      enum: ["American", "Greek", "Italian", "Japanese", "Mexican", "Thai"],
    },
    price: { type: String, enum: ["$", "$$", "$$$", "$$$$", "$$$$$"] },
    yearOpened: {
      type: Number,
      default: function () {
        return new Date().getFullYear();
      },
      min: 1925,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Restaurant", restaurantSchema);
