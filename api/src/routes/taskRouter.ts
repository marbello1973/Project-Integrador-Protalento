//router importa los handlers

import { Router } from "express";
import {
  createTask,
  allTasks,
  updateTask,
  dellTask,
} from "../handler/taskHandlers";

const taskRouter = Router();

taskRouter.get("/", allTasks);

taskRouter.post("/", createTask);

taskRouter.put("/:id", updateTask);

taskRouter.delete("/:id", dellTask);

export { taskRouter };
