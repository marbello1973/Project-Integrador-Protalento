import { Router } from "express";
import taskRouter from "./taskRouter";

const mainRouter = Router();

mainRouter.use("/task", taskRouter);

export = mainRouter;
