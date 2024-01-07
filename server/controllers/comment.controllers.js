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

    const comment = recipe.comments.find(comment => comment._id == commentID);

    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }

    if (comment.user_id !== req.user.id) {
      return res.status(403).json({ error: "Permission denied. You are not the creator of the comment." });
    }

    const updatedRecipe = await Recipe.findOneAndUpdate(
      { _id: recipeID },
      { $pull: { comments: { _id: commentID } } },
      { new: true }
    );

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

    const comment = recipe.comments.find(comment => comment._id == commentID);

    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }

    const comments = recipe.comments;
    const reply = comment.replies.find((r) => r._id == replyID);

    if (!reply) {
      return res.status(404).json({ error: "Reply not found" });
    }

    if (reply.user_id !== req.user.id) {
      return res.status(403).json({ error: "Permission denied. You are not the creator of the reply." });
    }

    const updatedRecipe = await Recipe.findOneAndUpdate(
      { _id: recipeID, "comments._id": commentID },
      { $pull: { "comments.$.replies": { _id: replyID } } },
      { new: true }
    );

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
