const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const fileFilter = (req, file, cb) => {
  const allowedType = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedType.includes(file.mimetype)) {
    cb(null, true);
  } else cb(null, false);
};

const profileImage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/profileImage");
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
  },
});

const taskImage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/taskImage");
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
  },
});

let uploadProfileImage = multer({ storage: profileImage, fileFilter });

let uploadTaskImage = multer({ storage: taskImage, fileFilter });

const audioStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/audio");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now().toString(16) + "-" + file.originalname + ".mp3");
  },
});

const uploadAudioFile = multer({
  preservePath: true,
  storage: audioStorage,
});
module.exports = { uploadProfileImage, uploadAudioFile, uploadTaskImage };
