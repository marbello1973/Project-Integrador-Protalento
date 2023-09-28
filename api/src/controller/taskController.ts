import Task from "../models/tasks";
import { TaskBool, TaskInter } from "../interface";
import { ObjectId } from "mongodb";

const createTaskController = async (
  nameTask: TaskInter,
  description: TaskInter,
  category: TaskInter,
  completed: TaskBool
) => {
  const newTask = await Task.create({
    nameTask,
    description,
    category,
    completed,
  });

  return newTask;
};

async function allTaskController() {
  const task = await Task.find();
  if (!task) return "No existen tareas";
  return task;
}

const updateTaskController = async (
  id: string,
  nameTask: string,
  description: string,
  category: string
) => {
  const updateTask = await Task.findById(id);

  if (!updateTask) return "Tarea no encontrada";

  if (updateTask.nameTask) {
    updateTask.nameTask = nameTask;
  }

  if (updateTask.description) {
    updateTask.description = description;
  }

  if (updateTask.category) {
    updateTask.category = category;
  }

  const update = await updateTask.save();
  return update;
};

const dellTaskController = async (id: string) => {
  const dell = await Task.deleteOne({ _id: new ObjectId(id) });
  if (dell.deletedCount === 0) {
    return "Registro no existe";
  } else {
    return "Registro eliminado";
  }
};

export {
  createTaskController,
  allTaskController,
  updateTaskController,
  dellTaskController,
};
