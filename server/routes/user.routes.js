const express = require("express");
const router = express.Router();

const {
  getDashboard,
  updateProfile,
  deleteProfile,
  postProfileImage,
} = require("../controllers/user.controllers.js");
const ensureAuthenticated = require("../middlewares/auth.middleware.js");
const { uploadProfileImage } = require("../middlewares/image.middleware");

router.get("/dashboard", getDashboard);
router.patch("/update-profile", updateProfile);
router.delete("/delete-profile/:id", deleteProfile);
router.post(
  "/update-profile-image",
  uploadProfileImage.single("image"),
  postProfileImage
);

module.exports = router;
