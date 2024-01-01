const express = require("express");
const router = express.Router();
const {
  createTask,
  updateTask,
  deleteTask,
  getTasksByUser,
  appendImagesToTask,
  appendAudioToTask,
} = require("../controllers/task.controllers.js");
const ensureAuthenticated = require("../middlewares/auth.middleware");
const {
  uploadTaskImage,
  uploadAudioFile,
} = require("../middlewares/image.middleware");

router.post("/tasks/create", ensureAuthenticated, createTask);
router.patch("/tasks/:id", ensureAuthenticated, updateTask);
router.delete("/tasks/:id", ensureAuthenticated, deleteTask);
router.get("/tasks/:userId", ensureAuthenticated, getTasksByUser);
router.post(
  "/tasks/:taskId/images",
  ensureAuthenticated,
  uploadTaskImage.array("images", 5),
  appendImagesToTask
);
router.post(
  "/tasks/:taskId/audio",
  ensureAuthenticated,
  uploadAudioFile.array("audios", 5),
  appendAudioToTask
);

module.exports = router;
