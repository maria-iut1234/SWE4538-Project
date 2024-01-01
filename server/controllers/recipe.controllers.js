const path = require("path");
const Recipe = require("../models/Recipe.model");
const User = require("../models/User.model");

const createRecipe = async (req, res, next) => {
  const { name, description, difficulty, tag, ingredients, images, audios } =
    req.body;
  const userID = req.user.id;

  const user = await User.findById(userID);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  const errors = [];
  if (!name) {
    errors.push("Recipe name is a required field!");
  }

  if (errors.length > 0) {
    res.status(400).json({ error: errors });
  } else {
    const newRecipe = new Recipe({
      user_id: user._id,
      name: name,
      description: description,
      difficulty: difficulty,
      tag: tag,
      ingredients: ingredients || [],
      images: images || [],
      audios: audios || [],
    });
    newRecipe
      .save()
      .then(() => {
        res.status(200).json({ message: "Recipe Successfully Created!" });
      })
      .catch((err) => {
        errors.push("Please try again");
        res.status(400).json({ error: errors });
        //console.log(err);
      });
  }
};

const getRecipe = async (req, res) => {
  try {
    const recipeID = req.params.recipeID;
    const recipe = await Recipe.findById(recipeID);

    res.status(200).send(recipe);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const updateRecipe = async (req, res) => {
  try {
    const { name, description, difficulty, tag, ingredients } = req.body;

    const recipeID = req.params.recipeID;
    const recipe = await Recipe.findById(recipeID);

    if (!recipe) {
      return res.status(404).json({ error: "Recipe does not exist." });
    }

    const userId = req.user.id;
    const user = await User.findById(userId);

    if (recipe.user_id.toString() !== user._id.toString()) {
      return res
        .status(403)
        .json({ error: "You do not have permission to update this recipe" });
    }

    if (name) {
      recipe.name = name;
    }

    if (description) {
      recipe.description = description;
    }

    if (difficulty) {
      recipe.difficulty = difficulty;
    }

    if (tag) {
      recipe.tag = tag;
    }

    if (ingredients) {
      recipe.ingredients = ingredients;
    }

    await recipe.save();

    res.json({ message: "Recipe information updated successfully" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const deleteRecipe = async (req, res) => {
  try {
    const userID = req.user.id;
    const recipeID = req.params.recipeID;

    const user = await User.findById(userID);
    const recipe = await Recipe.findById(recipeID);

    if (recipe.user_id.toString() !== user._id.toString()) {
      return res
        .status(403)
        .json({ error: "You do not have permission to update this recipe." });
    }

    await recipe.deleteOne({ _id: recipeID });

    res.json({ message: "Recipe deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateRecipeImages = async (req, res) => {
  try {
    if (!req.files) {
      return res.status(400).json({ message: "No file provided" });
    }

    const photo = req.files.map((file) => file.filename);

    const recipeID = req.params.recipeID;
    const recipe = await Recipe.findById(recipeID);

    const userID = req.user.id;
    const user = await User.findById(userID);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (recipe.user_id.toString() !== user._id.toString()) {
      return res
        .status(403)
        .json({ error: "You do not have permission to update this recipe" });
    }

    if (!recipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }

    if (photo) {
      photo.forEach(function (image) {
        recipe.images.push(image);
      });
    }
    await recipe.save();

    res.json({ message: "Multiple images updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateRecipeAudios = async (req, res) => {
  try {
    if (!req.files) {
      return res.status(400).json({ message: "No file provided" });
    }
    const audio = req.files.map((file) => file.filename);

    const recipeID = req.params.recipeID;
    const recipe = await Recipe.findById(recipeID);

    const userID = req.user.id;
    const user = await User.findById(userID);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (recipe.user_id.toString() !== user._id.toString()) {
      return res
        .status(403)
        .json({ error: "You do not have permission to update this recipe" });
    }

    if (!recipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }

    if (audio) {
      audio.forEach(function (audio) {
        recipe.audios.push(audio);
      });
    }
    await recipe.save();

    res.json({ message: "Multiple audios updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createRecipe,
  updateRecipe,
  deleteRecipe,
  getRecipe,
  updateRecipeImages,
  updateRecipeAudios,
};
