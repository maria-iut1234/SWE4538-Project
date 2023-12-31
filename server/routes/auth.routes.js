const express = require("express");
const router = express.Router();
const {
  getLogin,
  getRegister,
  postLogin,
  postRegister,
  updateProfile,
  getProfileInfos,
  deleteProfile,
} = require("../controllers/auth.controllers");

// upload images
const {
  uploadProfileImage,
  uploadAudioFile,
} = require("../middlewares/image.middleware");
const {
  getMediaPage,
  postProfileImage,
  postMultipleImages,
  getMultipleImages,
  postAudioFile,
} = require("../controllers/auth.controllers");

router.get("/login", getLogin);
router.post("/login", postLogin);
router.get("/register", getRegister);
router.post("/register", postRegister);
router.get("/logout");
router.get("/profiles", getProfileInfos);
router.patch("/update-profile", updateProfile);
router.delete("/delete-profile/:id", deleteProfile);
router.get("/multiple_image", getMultipleImages);
router.post("/upload/audio", uploadAudioFile.single("audio"), postAudioFile);
router.post(
  "/upload/single_image",
  uploadProfileImage.single("image"),
  postProfileImage
);
router.post(
  "/upload/multiple_image",
  uploadProfileImage.array("images", 5),
  postMultipleImages
);

module.exports = router;
