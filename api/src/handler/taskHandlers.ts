import { Request, Response } from "express";
import {
  createTaskController,
  allTaskController,
  updateTaskController,
  dellTaskController,
} from "../controller/taskController";

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
    res.status(400).json({ message: `${tasks} no existe` });
  }
};

const updateTask = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { nameTask, description, category } = req.body;
  const updateTaskData = await updateTaskController(
    id,
    nameTask,
    description,
    category
  );

  if (updateTaskData) {
    res.status(200).json({ data: "Actualizada", updateTaskData });
  } else {
    res.status(400).json(`${updateTaskData} no existen`);
  }
};

const dellTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const dell = await dellTaskController(id);
  if (dell) {
    res.status(200).json({ message: `${dell}` });
  } else {
    res.status(400).json(`${dell} Tarea no existe`);
  }
};

export { createTask, allTasks, updateTask, dellTask };
