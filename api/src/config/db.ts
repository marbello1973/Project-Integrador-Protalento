import * as dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const URL_MONGOOSE = process.env.URL_MONGOOSE;

const DB_URL = `${URL_MONGOOSE}}`;

export const db = () => {
  const connect = () => {
     mongoose
      .connect(DB_URL, {
        family: 4,
      })
      .then(() => console.log("Conexión a la base de datos exitosa"))
      .catch((error) =>
        console.error("Error de conexión a la base de datos:", error)
      );
  };
   connect();
};
