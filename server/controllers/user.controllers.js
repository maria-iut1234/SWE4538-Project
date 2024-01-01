const path = require("path");
const User = require("../models/User.model");

// fetch dashboard page
const getDashboard = async (req, res) => {
  const filePath = path.join(__dirname, "../../client/user/dashboard.html");
  res.sendFile(filePath);
};

const getProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);

    res.status(200).send(user);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const updateProfile = async (req, res) => {
  try {
    const { name, favouriteCoffee } = req.body;

    const userId = req.user.id;
    const user = await User.findById(userId);

    if (name) {
      user.name = name;
    }

    if (favouriteCoffee) {
      user.favouriteCoffee = favouriteCoffee;
    }

    await user.save();

    res.json({ message: "User information updated successfully" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const deleteProfile = async (req, res) => {
  try {
    const userID = req.user.id;
    const profileID = req.params.id;
    const user = await User.findById(userID);

    if (user._id != profileID) {
      return res.status(404).json({ error: "You are not authenticated!" });
    }

    await user.deleteOne({ _id: userID });

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const postProfileImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file provided" });
    }
    const photo = req.file.filename;

    const userId = req.user.id;
    const user = await User.findById(userId);

    if (photo) {
      user.profile_image = photo;
    }
    await user.save();

    res.json({ message: "Profile image updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getDashboard,
  postProfileImage,
  updateProfile,
  deleteProfile,
  getProfile,
};
