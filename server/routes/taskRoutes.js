import express from "express";
import {
  createTask,
  getUserTasks,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";
import { protect } from "../middleware/authMiddleware.js"; // Ensures authentication

const router = express.Router();

router.post("/", protect, createTask);  // Create task
router.get("/", protect, getUserTasks); // Get all user tasks
router.put("/:id", protect, updateTask); // Update task
router.delete("/:id", protect, deleteTask); // Delete task

export default router;
