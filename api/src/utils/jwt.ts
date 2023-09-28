import * as dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

const secretKey = process.env.SECRET_KEY;

const token = (payload: string): void => {
  jwt.sign(payload, `${secretKey}`, {
    algorithm: "HS256",
  });
};

const dataToken = (token: string) => {
  let data: any;
  jwt.verify(token, `${secretKey}`, (error, decode) => {
    if (error) {
      console.log(`${error} al obtener la data${data}`);
    } else {
      data = decode;
      return data;
    }
  });
};

export { token, dataToken };
