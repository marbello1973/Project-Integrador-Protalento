import mongoose from "mongoose";

export interface InterfaceTaskSchema {
  nameTask: string;
  description: string;
  category: string;
  completed: Completed;
}

interface Completed {
  completed: boolean;
}

const Tasks = new mongoose.Schema(
  {
    nameTask: { type: String, required: true },
    description: { type: String },
    category: { type: String, required: true },
    completed: { type: Boolean, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model<InterfaceTaskSchema>("Task", Tasks);
