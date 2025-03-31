import Task from "../models/Task.js";

export const calculateEstimatedDuration = async (userId, title) => {
  const completedTasks = await Task.find({ user: userId, title, status: "done", actualDuration: { $exists: true } });

  if (completedTasks.length === 0) return 60; // Default: 60 minutes if no past data

  const totalTime = completedTasks.reduce((acc, task) => acc + task.actualDuration, 0);
  return Math.round(totalTime / completedTasks.length); // Return average time
};
