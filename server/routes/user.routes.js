const express = require("express");
const router = express.Router();

const {
  getDashboard,
  updateProfile,
  deleteProfile,
  postProfileImage,
  getProfile,
} = require("../controllers/user.controllers.js");

const ensureAuthenticated = require("../middlewares/auth.middleware.js");
const { uploadProfileImage } = require("../middlewares/file.middleware");

router.get("/dashboard", ensureAuthenticated, getDashboard);
router.get("/user/profile", ensureAuthenticated, getProfile);
router.patch("/user/update", ensureAuthenticated, updateProfile);
router.delete("/user/delete/:id", ensureAuthenticated, deleteProfile);
router.post(
  "/user/profile-image",
  ensureAuthenticated,
  uploadProfileImage.single("image"),
  postProfileImage
);

module.exports = router;
