const express = require("express");
const router = express.Router();

const {
  searchByTag,
  searchByName,
  searchByIngredient,
  searchMostRatedRecipe,
} = require("../controllers/search.controllers.js");

router.get("/search/tag", searchByTag);
router.get("/search/name", searchByName);
router.get("/search/ingredient", searchByIngredient);
router.get("/search/rated", searchMostRatedRecipe);

module.exports = router;
