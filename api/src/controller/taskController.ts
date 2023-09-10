import Task from "../models/tasks";

interface TaskInter {
  id: string;
  nameTask: string;
  description: string;
  category: string;
  completed: TaskBool;
}

interface TaskBool {
  completed: boolean;
}

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
  if (!task) return "tareas no existen";
  return task;
}

export { createTaskController, allTaskController };
