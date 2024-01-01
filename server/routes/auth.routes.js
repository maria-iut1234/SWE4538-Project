const express = require("express");
const router = express.Router();
const {
  getLogin,
  getRegister,
  postLogin,
  postRegister,
  logout,
  getGoogleLogin,
  getGoogleAuth,
  getForgotPass,
  resetPass,
} = require("../controllers/auth.controllers");

router.get("/login", getLogin);
router.post("/login", postLogin);
router.get("/register", getRegister);
router.post("/register", postRegister);
router.get("/logout", logout);
router.get("/auth/google", getGoogleLogin);
router.get("/auth/google/callback", getGoogleAuth);
router.get("/forgotPass", getForgotPass);
router.post("/resetPass", resetPass);

module.exports = router;
