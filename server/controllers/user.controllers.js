const path = require("path");

// fetch dashboard page
const getDashboard = async (req, res) => {
  const filePath = path.join(__dirname, "../../client/user/dashboard.html");
  res.sendFile(filePath);
};

const updateProfile = async (req, res) => {
  try {
    const { name, currentPassword, newPassword } = req.body;

    const userId = req.user.id;
    const user = await User.findById(userId);

    // Update the password if provided
    if (newPassword) {
      const isPasswordValid = await bcrypt.compare(
        currentPassword,
        user.password
      );

      if (!isPasswordValid) {
        return res.status(400).json({ error: "Current password is incorrect" });
      }

      const hashedPassword = await bcrypt.hash(newPassword, 10);
      user.password = hashedPassword;
    }

    await user.save();

    res.json({ message: "User information updated successfully" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const deleteProfile = async (req, res) => {
  try {
    const profileID = req.params.id;
    const profileInfo = await User.findById(profileID);

    if (!profileInfo) {
      return res.status(404).json({ error: "Profile information not found" });
    }

    await profileInfo.deleteOne({ _id: profileID });

    res.json({ message: "Profile information deleted successfully" });
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
};
