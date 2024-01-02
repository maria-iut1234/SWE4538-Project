const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  difficulty: {
    type: String,
  },
  tag: {
    type: String,
    default: "casual",
  },
  ingredients: {
    type: [String],
    default: [],
  },
  upvotes: {
    type: Number,
    default: 0,
  },
  downvotes: {
    type: Number,
    default: 0,
  },
  upvotesBy: {
    type: [String],
    default: [],
  },
  downvotesBy: {
    type: [String],
    default: [],
  },
  images: {
    type: [String],
    default: [],
  },
  audios: {
    type: [String],
    default: [],
  },
});

const Recipe = mongoose.model("Recipe", RecipeSchema);
module.exports = Recipe;
