import "dotenv/config";
import { db } from "./config/db";
// import mongoose from "mongoose";
import express, { Application } from "express";
import cors from "cors";
import mainRouter from "./routes/index";

const app: Application = express();
const PORT = process.env.PORT;
// const URL = process.env.URL_MONGOOSE;
// const DB_URL = `mongodb://localhost:27017/TaskList`;

app.use(express.json());
app.use(cors());

app.use(mainRouter);

app.get("/", (_req, res) => {
  res.send("Bienvenido TodoList");
});

// mongoose
//   .connect(DB_URL, {
//     keepAlive: true,
//   })
//   .then((result) => console.log("Conectado MongoDB", result))
//   .catch((error) => console.log(`${error}`));

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

db();
