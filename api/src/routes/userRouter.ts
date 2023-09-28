import { Router } from "express";
import { isAdmin } from "../middleware/rolesAuthorized";
import {
  createUser,
  allUser,
  updateUser,
  dellUser,
  userLogin,
} from "../handler/userHandlers";

const userRouter = Router();

userRouter.get("/", isAdmin, allUser);

userRouter.post("/register", createUser);

userRouter.post("/login", userLogin);

userRouter.put("/:id", updateUser);

userRouter.delete("/:id", isAdmin, dellUser);

export { userRouter };
