import "dotenv/config";
import express, { Application } from "express";
import cors from "cors";

const app: Application = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

app.get("/user", (_req, res) => {
  res.send("Server OK");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
