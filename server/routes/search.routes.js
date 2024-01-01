const express = require("express");
const router = express.Router();

const {
  searchByTag,
} = require("../controllers/search.controllers.js");

router.get("/search/:tag", searchByTag);

module.exports = router;
