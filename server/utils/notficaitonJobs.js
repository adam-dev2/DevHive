import cron from "node-cron";
import Task from "../models/Task.js";
import sendWebNotification from "./sendWebNotification.js"; // 🔥 Function to send push notifications

// 🔥 Runs every minute
cron.schedule("* * * * *", async () => {
  console.log("Checking for due notifications...");
  
  const now = new Date();
  const tasksToNotify = await Task.find({ reminderTime: { $lte: now } });

  tasksToNotify.forEach(async (task) => {
    console.log(`Sending notification for task: ${task.title}`);
    
    // Send Web Push Notification
    await sendWebNotification(task);

    // OPTIONAL: If you also want emails, call the function here

    // Remove reminderTime after sending to prevent duplicate notifications
    task.reminderTime = null;
    await task.save();
  });
});

export default cron;
