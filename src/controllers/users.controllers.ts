import { Request, Response } from "express";
import { IUser, IUserRequest } from "../interfaces/users";
import createUserService from "../services/users/createUser.service";
import deleteUserService from "../services/users/deleteUser.service";
import listUserService from "../services/users/listUser.service";
import updateUserService from "../services/users/updateUser.service";

const createUserController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, isAdm }: IUserRequest = req.body;

    const user = await createUserService({ name, email, password, isAdm });

    return res.status(201).send(user);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

const listUserController = async (req: Request, res: Response) => {
  try {
    const users = await listUserService();

    return res.send(users);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

const updateUserController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { name, email, isAdm, password }: IUserRequest = req.body;

    const user = await updateUserService({ id, name, email, isAdm, password });

    return res.status(201).send(user);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

const deleteUserController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const user = await deleteUserService(id);

    return res.status(200).send(user);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(404).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export {
  createUserController,
  listUserController,
  updateUserController,
  deleteUserController,
};
