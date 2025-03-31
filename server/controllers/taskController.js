import Task from "../models/Task.js";


// ✅ Create a Task
export const createTask = async (req, res) => {
  try {
    const { title, description, status, priority, dueDate, reminderTime } = req.body;
    const userId = req.user.id;

    const newTask = new Task({
      user: userId,
      title,
      description,
      status,
      priority,
      dueDate,
      reminderTime, // ✅ Ensuring reminderTime is stored
    });

    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ 
        message: "You already have a task with this title. Mark the existing task as done to remove it." 
      });
    }
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

const priorityOrder = { high: 1, medium: 2, low: 3 };

export const getUserTasks = async (req, res) => {
  try {
    let tasks = await Task.find({ user: req.user.id });

    // ✅ Manually sort tasks using JavaScript (since MongoDB doesn’t allow custom priority sorting)
    tasks.sort((a, b) => {
      if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
        return priorityOrder[a.priority] - priorityOrder[b.priority]; // Higher priority first
      }
      if (!a.dueDate) return 1; // Tasks without due date go to bottom
      if (!b.dueDate) return -1;
      return new Date(a.dueDate) - new Date(b.dueDate); // Earlier due dates first
    });

    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: `Error is: ${error}` });
  }
};



// ✅ Update a Task
export const updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id }, 
      req.body,
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found or unauthorized" });
    }

    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// ✅ Update Task Status
export const updateTaskStatus = async (req, res) => {
  try {
    const { taskId } = req.params;
    const { status } = req.body;
    const userId = req.user.id;

    const task = await Task.findOne({ _id: taskId, user: userId });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    if (status === "done") {
      await Task.deleteOne({ _id: taskId });
      return res.status(200).json({ message: "Task completed and removed" });
    }

    task.status = status;
    await task.save();

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// ✅ Delete a Task
export const deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found or unauthorized" });
    }

    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
