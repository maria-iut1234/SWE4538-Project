const User = require("../models/User.model");
const Task = require("../models/Task.model");

const createTask = async (req, res, next) => {
  const { name, priority, images, audios } = req.body;
  const description = req.body.description;
  const userEmail = req.user.email;

  const user = await User.findOne({ email: userEmail }); // Find the user by email

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  //console.log(name);
  //console.log(userID)
  //console.log(priority);
  //console.log(description);

  const errors = [];
  if (!name || !priority) {
    errors.push("Task name and priority are required fields!");
  }

  if (errors.length > 0) {
    res.status(400).json({ error: errors });
  } else {
    //Create New Task
    const newTask = new Task({
      user_id: user._id,
      name: name,
      priority: priority,
      description: description,
      images: images || [],
      audios: audios || [],
    });
    newTask
      .save()
      .then(() => {
        res.status(200).json({ message: "Task Successfully Created!" });
      })
      .catch((err) => {
        errors.push("Please try again");
        res.status(400).json({ error: errors });
        //console.log(err);
      });
  }
};

const getTasksByUser = async (req, res) => {
  try {
    const userEmail = req.user.email;

    const user = await User.findOne({ email: userEmail });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const tasks = await Task.find({ user_id: user._id });

    if (req.params.userId !== user._id.toString()) {
      return res
        .status(403)
        .json({ error: "You do not have permission to update this project" });
    }

    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const { name, priority, description } = req.body;
    const taskID = req.params.id;

    const task = await Task.findById(taskID);

    const userEmail = req.user.email;

    const user = await User.findOne({ email: userEmail });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (task.user_id.toString() !== user._id.toString()) {
      return res
        .status(403)
        .json({ error: "You do not have permission to update this project" });
    }

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    } else {
      console.log(task);

      if (name) {
        task.name = name;
      }

      if (priority) {
        task.priority = priority;
      }

      if (description) {
        task.description = description;
      }

      await task.save();

      res.json({ message: "User information updated successfully" });
    }
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const taskID = req.params.id;
    const task = await Task.findById(taskID);

    const userEmail = req.user.email;

    const user = await User.findOne({ email: userEmail });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (task.user_id.toString() !== user._id.toString()) {
      return res
        .status(403)
        .json({ error: "You do not have permission to update this project" });
    }

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    await task.deleteOne({ _id: taskID });

    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const appendImagesToTask = async (req, res) => {
  try {
    if (!req.files) {
      return res.status(400).json({ message: "No file provided" });
    }

    const photo = req.files.map((file) => file.filename);

    const taskId = req.params.taskId;
    const task = await Task.findById(taskId);

    const userEmail = req.user.email;

    const user = await User.findOne({ email: userEmail });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (task.user_id.toString() !== user._id.toString()) {
      return res
        .status(403)
        .json({ error: "You do not have permission to update this project" });
    }

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    if (photo) {
      photo.forEach(function (image) {
        task.images.push(image);
      });
    }
    await task.save();

    res.json({ message: "Multiple images updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const appendAudioToTask = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file provided" });
    }
    const audio = req.files.map((file) => file.filename);

    const taskId = req.params.taskId;
    const task = await Task.findById(taskId);

    const userEmail = req.user.email;

    const user = await User.findOne({ email: userEmail });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (task.user_id.toString() !== user._id.toString()) {
      return res
        .status(403)
        .json({ error: "You do not have permission to update this project" });
    }

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    if (audio) {
      audio.forEach(function (audio) {
        task.audios.push(audio);
      });
    }
    await task.save();

    res.json({ message: "Multiple audios updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createTask,
  getTasksByUser,
  updateTask,
  deleteTask,
  appendImagesToTask,
  appendAudioToTask,
};
