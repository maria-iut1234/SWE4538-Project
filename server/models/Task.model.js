const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  user_id: { 
    type: String, 
    required: true 
  },
  name: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  images: {
    type: [String],
    default: [],
  },
  audios: {
    type: [String],
    default: [],
  },
});

const Task = mongoose.model("Task", TaskSchema);
module.exports = Task;
