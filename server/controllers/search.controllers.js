const path = require("path");
const Recipe = require("../models/Recipe.model");
const User = require("../models/User.model");

const searchByTag = async (req, res) => {
  try {
    const searchTag = req.query.tag;
    const recipes = await Recipe.find({ tag: searchTag });

    if (!recipes) {
      return res
        .status(400)
        .json({ message: "No recipes found with such tag." });
    }

    res.status(200).send(recipes);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const searchByName = async (req, res) => {
  try {
    const searchName = req.query.name;
    const recipes = await Recipe.find({ name: searchName });

    if (!recipes) {
      return res
        .status(400)
        .json({ message: "No recipes found with such name." });
    }

    res.status(200).send(recipes);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const searchByIngredient = async (req, res) => {
  try {
    const searchIngredient = req.query.ingredient;
    const recipes = await Recipe.find({
      ingredients: { $in: [searchIngredient] },
    });

    if (!recipes) {
      return res
        .status(400)
        .json({ message: "No recipes found with such an ingredient." });
    }

    res.status(200).send(recipes);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const searchMostRatedRecipe = async (req, res) => {
  try {
    const { order } = req.query;

    let sortQuery;
    if (order === 'best') {
      // Sort in descending order for best recipes
      sortQuery = { upvotes: -1 };
    } else if (order === 'worst') {
      // Sort in descending order for worst recipes
      sortQuery = { downvotes: -1 };
    } else {
      return res.status(400).json({ error: "Invalid 'order' query parameter" });
    }

    const mostRatedRecipe = await Recipe.find().sort(sortQuery);

    if (!mostRatedRecipe) {
      return res.status(404).json({ error: "No recipes found" });
    }

    res.status(200).json({ mostRatedRecipe });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  searchByTag,
  searchByName,
  searchByIngredient,
  searchMostRatedRecipe,
};
