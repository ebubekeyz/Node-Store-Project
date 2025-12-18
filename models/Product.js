const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title"],
    },
    company: {
      type: String,
      default: "stella york",
    },
    shipping: {
      type: Boolean,
      default: false,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    category: {
      type: String,
    },
    price: {
      type: Number,
      required: [true, "Please provide a price"],
    },
    image: {
      type: String,
      required: [true, "Please provide an image"],
    },

    description: {
      type: String,
    },
    colors: [],
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
