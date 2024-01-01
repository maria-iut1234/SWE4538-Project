const User = require("../models/User.model");
const path = require("path");
const bcrypt = require("bcrypt");
const passport = require("passport");
require("../config/passport");

// fetch login page
const getLogin = async (req, res) => {
  const filePath = path.join(__dirname, "../../client/auth/login.html");
  res.sendFile(filePath);
};

// login logic
const postLogin = (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
    failureFlash: true,
  })(req, res, next);
};

// fetch registration page
const getRegister = async (req, res) => {
  const filePath = path.join(__dirname, "../../client/auth/register.html");
  res.sendFile(filePath);
};

// registration logic
const postRegister = async (req, res, next) => {
  const { email, password } = req.body;
  const name = req.body.username;
  const errors = [];

  if (!name || !email || !password) {
    errors.push("All fields are required!");
  }

  // all fields not given as input
  if (errors.length > 0) {
    res.status(400).json({ error: errors });
  } else {
    //Create New User
    User.findOne({ email: email }).then((user) => {
      if (user) {
        errors.push("User already exists with this email!");
        res.status(400).json({ error: errors });
      } else {
        bcrypt.genSalt(10, (err, salt) => {
          if (err) {
            errors.push(err);
            res.status(400).json({ error: errors });
          } else {
            bcrypt.hash(password, salt, (err, hash) => {
              if (err) {
                errors.push(err);
                res.status(400).json({ error: errors });
              } else {
                const newUser = new User({
                  name,
                  email,
                  password: hash,
                });
                newUser
                  .save()
                  .then(() => {
                    res.redirect("/login");
                  })
                  .catch(() => {
                    errors.push("Please try again");
                    res.status(400).json({ error: errors });
                  });
              }
            });
          }
        });
      }
    });
  }
};

const logout = async (req, res) => {
  req.logout((err) => {
    if (err) {
      res.json({ error: err });
    } else res.redirect("/landingPage");
  });
};

const getGoogleLogin = async (req, res, next) => {
  passport.authenticate("google", { scope: ["profile", "email"] })(
    req,
    res,
    next
  );
};

const getGoogleAuth = async (req, res, next) => {
  passport.authenticate("google", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
    failureFlash: true,
  })(req, res, next);
};

const getForgotPass = async (req, res) => {
  const filePath = path.join(__dirname, "../../client/auth/forgotPass.html");
  res.sendFile(filePath);
};

const resetPass = async (req, res) => {
  try {
    const { email, oldPassword, newPassword } = req.body;

    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(400).json({ error: "User does not exist." });
    }

    // Update the password if provided
    if (newPassword) {
      const isPasswordValid = await bcrypt.compare(
        oldPassword,
        user.password
      );

      if (!isPasswordValid) {
        return res.status(400).json({ error: "Current password is incorrect" });
      }

      const hashedPassword = await bcrypt.hash(newPassword, 10);
      user.password = hashedPassword;
    }

    await user.save();

    res.json({ message: "User information reset successfully" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  getLogin,
  getRegister,
  postLogin,
  postRegister,
  logout,
  getGoogleLogin,
  getGoogleAuth,
  getForgotPass,
  resetPass,
};
