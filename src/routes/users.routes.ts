import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUserController,
  updateUserController,
} from "../controllers/users.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureIsAdmMiddleware from "../middlewares/ensureIsAdm.middleware";

const userRoutes = Router();

userRoutes.post("", createUserController);
userRoutes.get(
  "",
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  listUserController
);
userRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  updateUserController
);
userRoutes.delete("/:id", deleteUserController);

export default userRoutes;
