const express = require("express");
const router = express.Router();

const {
  createComment,
  createReply,
  deleteComment,
  deleteReply,
} = require("../controllers/comment.controllers.js");

const ensureAuthenticated = require("../middlewares/auth.middleware.js");

router.post("/recipe/comment/:recipeID", ensureAuthenticated, createComment);
router.delete("/recipe/comment/:recipeID/:commentID", ensureAuthenticated, deleteComment);
router.post("/recipe/reply/:recipeID/:commentID", ensureAuthenticated, createReply);
router.delete("/recipe/reply/:recipeID/:commentID/:replyID", ensureAuthenticated, deleteReply);

module.exports = router;
