const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  replies: {
    type: [this], 
    default: [],
  },
});

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
  comments: {
    type: [CommentSchema], 
    default: [],
  }
});

const Recipe = mongoose.model("Recipe", RecipeSchema);
module.exports = Recipe;
