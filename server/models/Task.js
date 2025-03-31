import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    description: { type: String },
    status: { type: String, enum: ["todo", "in-progress", "done"], default: "todo" },
    priority: { type: String, enum: ["low", "medium", "high"], default: "medium" },
    dueDate: { type: Date },
    reminderTime: { type: Date } // ✅ Add this line
  },
  { timestamps: true }
);


// 🔥 Fix uniqueness: Ensure each user can only have unique task titles
taskSchema.index({ user: 1, title: 1 }, { unique: true });

const Task = mongoose.model("Task", taskSchema);
export default Task;
