import {
  createTaskController,
  allTaskController,
} from "../controller/taskController";
import { Request, Response } from "express";

const createTask = async (req: Request, res: Response) => {
  const { nameTask, description, category, completed } = req.body;
  try {
    const newTask = await createTaskController(
      nameTask,
      description,
      category,
      completed
    );
    res.status(200).json(newTask);
  } catch (error) {
    res.status(400).json("error task");
  }
};

const allTasks = async (_req: Request, res: Response) => {
  const tasks = await allTaskController();
  if (tasks) {
    res.status(200).json(tasks);
  } else {
    console.log(`${tasks} no existe`);
  }
};

export { createTask, allTasks };
