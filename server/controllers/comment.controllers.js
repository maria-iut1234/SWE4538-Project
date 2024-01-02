const Recipe = require("../models/Recipe.model");
const Comment = require("../models/Comment.model");

const createComment = async (req, res, next) => {
  try {
    const { text } = req.body;
    const { recipeID } = req.params;

    const user_id = req.user.id;

    const recipe = await Recipe.findById(recipeID);

    if (!recipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }

    const newComment = new Comment({
      user_id,
      text,
    });

    recipe.comments.push(newComment);
    await recipe.save();

    res.status(201).json({ message: "Comment created successfully", comment: newComment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createReply = async (req, res, next) => {
  try {
    const { text } = req.body;
    const { recipeID, commentID } = req.params;

    const recipe = await Recipe.findById(recipeID);

    if (!recipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }

    const comment = recipe.comments.id(commentID);

    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }

    const user_id = req.user.id;

    const newReply = new Comment({
      user_id,
      text,
    });

    comment.replies.push(newReply);
    await recipe.save();

    res.status(201).json({ message: "Reply created successfully", reply: newReply });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteComment = async (req, res, next) => {
  try {
    const { recipeID, commentID } = req.params;

    const recipe = await Recipe.findById(recipeID);

    if (!recipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }

    const comment = recipe.comments.id(commentID);

    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }

    comment.remove();
    await recipe.save();

    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteReply = async (req, res, next) => {
  try {
    const { recipeID, commentID, replyID } = req.params;

    const recipe = await Recipe.findById(recipeID);

    if (!recipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }

    const comment = recipe.comments.id(commentID);

    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }

    const reply = comment.replies.id(replyID);

    if (!reply) {
      return res.status(404).json({ error: "Reply not found" });
    }

    reply.remove();
    await recipe.save();

    res.status(200).json({ message: "Reply deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createComment,
  createReply,
  deleteComment,
  deleteReply,
};
