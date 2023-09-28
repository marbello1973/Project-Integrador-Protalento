import { Router } from "express";
import { taskRouter } from "./taskRouter";
import { userRouter } from "./userRouter";

const mainRouter = Router();

mainRouter.use("/task", taskRouter);
mainRouter.use("/user", userRouter);

export = mainRouter;
