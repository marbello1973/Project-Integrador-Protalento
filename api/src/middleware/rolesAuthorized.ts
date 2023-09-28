import * as dotenv from "dotenv";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
dotenv.config();

const secretKey = process.env.SECRET_KEY;

const isUser = (req: Request, res: Response, next: NextFunction) => {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).json({ msg: "Token invalido" });
  }

  const decodeToken = jwt.verify(authToken, `${secretKey}`);

  if (
    typeof decodeToken === "object" &&
    decodeToken.hasOwnProperty("role") &&
    decodeToken.role === "user"
  ) {
    // return res.status(200).json({ message: "authorized" });
    return next();
  } else {
    return res.status(401).json({ message: "Not authorized" });
  }
};

//Authorization: Headers <token>
const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).json({ msg: "Token invalido" });
  }

  const decodeToken = jwt.verify(authToken, `${secretKey}`);

  if (
    typeof decodeToken === "object" &&
    decodeToken.hasOwnProperty("role") &&
    decodeToken.role === "admin"
  ) {
    // return res.status(200).json({ message: "authorized" });
    return next();
  } else {
    return res.status(401).json({ message: "Not authorized" });
  }
};

export { isAdmin, isUser };
