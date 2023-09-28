import "dotenv/config";
import {db }from "./config/db";
import express, { Application } from "express";
import cors from "cors";
import mainRouter from "./routes/index";

const app: Application = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "5mb" }));
app.use(cors());

app.use(mainRouter);

app.get("/", (_req, res) => {
  res.send("Bienvenido TodoList");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

db();
