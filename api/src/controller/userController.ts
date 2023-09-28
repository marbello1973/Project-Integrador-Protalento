import * as dotenv from "dotenv";
import { ObjectId } from "mongodb";
// import { token } from "../utils/jwt";
import jwt from "jsonwebtoken";
import Users from "../models/Users";
import { encrypt, verified } from "../utils/bcrypt";
dotenv.config();

const secretKey = process.env.SECRET_KEY;

const createUserController = async (
  role: string,
  name: string,
  lastName: string,
  email: string,
  password: string
) => {
  const emailUser = await Users.findOne({ email });
  const passHash = await encrypt(password);

  if (!emailUser) {
    const newUser = await Users.create({
      role,
      name,
      lastName,
      email,
      password: passHash,
    });
    return newUser;
  } else {
    return "Email existe en la base de datos";
  }
};

const userLoginController = async (email: string, password: string) => {
  const user = await Users.findOne({ email });

  if (!user) return "Invalid user name or password";

  const passwordHash = user.password;

  const validPassword = await verified(password, passwordHash);

  const tokenPayload = { email: user.email, role: user.role };

  const token = jwt.sign(tokenPayload, `${secretKey}`, {
    algorithm: "HS256",
    expiresIn: "1h",
  });

  if (!validPassword) return "Password Inavlid ";

  return [{ data: user }, { Token: token }];
};

const allUserController = async () => {
  const allData = await Users.find();
  if (allData.length === 0) return "No hay registros";
  return allData;
};

const updateUserController = async (
  id: string,
  name: string,
  lastName: string,
  email: string,
  password: string
) => {
  const userID = await Users.findByIdAndUpdate({ _id: new ObjectId(id) });
  if (!userID) {
    return "Usuario no existe en base de datos";
  }

  if (email) {
    const newEmail = userID.email;
    if (newEmail === email) return "Email se encuentra registrado";
    userID.email = email;
  }

  if (name) {
    userID.name = name;
  }

  if (lastName) {
    userID.lastName = lastName;
  }

  if (password) {
    const passHash = await encrypt(password);
    userID.password = passHash;
  }

  const updates = userID.save();
  return updates;
};

const dellUserController = async (id: string) => {
  const dell = await Users.deleteOne({ _id: new ObjectId(id) });
  if (dell.deletedCount === 0) {
    return "Registro no existe";
  } else {
    return `Registro eliminado`;
  }
};

export {
  createUserController,
  allUserController,
  updateUserController,
  dellUserController,
  userLoginController,
};
