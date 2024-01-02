const express = require("express");
const router = express.Router();

const {
  updateRecipe,
  updateRecipeAudios,
  updateRecipeImages,
  deleteRecipeAudios,
  deleteRecipeImages,
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

router.patch("/coffee/upvote/:recipeID", ensureAuthenticated, upvoteRecipe);
router.patch("/coffee/downvote/:recipeID", ensureAuthenticated, downvoteRecipe);

router.post("/coffee/create", ensureAuthenticated, createRecipe);
router.get("/coffee/recipe/:recipeID", getRecipe);
router.patch("/coffee/update/:recipeID", ensureAuthenticated, updateRecipe);
router.delete(
  "/coffee/recipe/delete/:recipeID",
  ensureAuthenticated,
  deleteRecipe
);

// media handling
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
router.delete("/coffee/:recipeID/images", ensureAuthenticated, deleteRecipeImages);
router.delete("/coffee/:recipeID/audios", ensureAuthenticated, deleteRecipeAudios);

module.exports = router;
