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

const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;
