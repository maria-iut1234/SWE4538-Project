const path = require("path");
const Recipe = require("../models/Recipe.model");
const User = require("../models/User.model");

const searchByTag = async (req, res) => {
  try {
    const searchTag = req.params.tag;
    const recipes = await Recipe.find({ tag: searchTag });

    if(!recipes) {
        return res.status(400).json({ message: "No recipes found with such tag." });
    }

    res.status(200).send(recipes);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  searchByTag,
};
