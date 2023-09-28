import { Request, Response } from "express";
import {
  createUserController,
  allUserController,
  updateUserController,
  dellUserController,
  userLoginController,
} from "../controller/userController";

async function createUser(req: Request, res: Response) {
  const { role, name, lastName, email, password } = req.body;
  const newUser = await createUserController(
    role,
    name,
    lastName,
    email,
    password
  );

  if (newUser) {
    res.status(200).json(newUser);
  } else {
    res.status(400).json("Usurio se encuentra registrado en la base de datos");
  }
}

const userLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const accesToken = await userLoginController(email, password);

  if (accesToken) {
    res.status(200).json(accesToken);
  } else {
    res.status(404).json({ msg: `Email ${email} no esta registrado` });
  }
};

async function allUser(_req: Request, res: Response) {
  const allData = await allUserController();
  if (allData) {
    res.status(200).json(allData);
  } else {
    res.status(400).json("No hay usuarios en base de datos");
  }
}

async function updateUser(req: Request, res: Response) {
  const { id } = req.params;
  const { name, lastName, email, password } = req.body;

  const userUpdate = await updateUserController(
    id,
    name,
    lastName,
    email,
    password
  );

  if (userUpdate) {
    res.status(200).json(userUpdate);
  } else {
    res.status(400).json("Email se encuentra registrado");
  }
}

async function dellUser(req: Request, res: Response) {
  const { id } = req.params;

  const dell = await dellUserController(id);

  if (id) {
    res.status(200).json(dell);
  } else {
    res.status(400).json("Usuario no existe");
  }
}

export { createUser, allUser, updateUser, dellUser, userLogin };
