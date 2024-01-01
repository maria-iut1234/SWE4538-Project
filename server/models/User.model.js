const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  google_id: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  favouriteCoffee: {
    type: String,
    default: "",
  },
  profile_image: {
    type: String,
    default: "",
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
