const express = require("express");
const router = express.Router();

const {
  updateRecipe,
  updateRecipeAudios,
  updateRecipeImages,
  deleteRecipe,
  getRecipe,
  createRecipe,
  upvoteRecipe,
  downvoteRecipe,
} = require("../controllers/recipe.controllers.js");

const ensureAuthenticated = require("../middlewares/auth.middleware.js");
const {
  uploadRecipeImage,
  uploadAudioFile,
} = require("../middlewares/file.middleware");

router.post("/coffee/create", ensureAuthenticated, createRecipe);
router.patch("/coffee/upvote/:recipeID", upvoteRecipe);
router.patch("/coffee/downvote/:recipeID", downvoteRecipe);
router.get("/coffee/recipe/:recipeID", getRecipe);
router.patch("/coffee/update/:recipeID", ensureAuthenticated, updateRecipe);
router.delete(
  "/coffee/recipe/delete/:recipeID",
  ensureAuthenticated,
  deleteRecipe
);
router.post(
  "/coffee/:recipeID/images",
  ensureAuthenticated,
  uploadRecipeImage.array("images", 5),
  updateRecipeImages
);
router.post(
  "/coffee/:recipeID/audios",
  ensureAuthenticated,
  uploadAudioFile.array("audios", 5),
  updateRecipeAudios
);

module.exports = router;
