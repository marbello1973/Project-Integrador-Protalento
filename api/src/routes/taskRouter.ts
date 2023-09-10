//router importa los handlers

import { Request, Response } from "express";
import { Router } from "express";
import { createTask, allTasks } from "../handler/taskHandlers";

const taskRouter = Router();

taskRouter.get("/", allTasks);

taskRouter.post("/", createTask);

taskRouter.put("/", (_req: Request, res: Response) => {
  res.status(200).json("ruta PU desde archivo");
});

taskRouter.delete("/", (_req: Request, res: Response) => {
  res.status(200).json("ruta DELETE desde archivo");
});

export = taskRouter;
