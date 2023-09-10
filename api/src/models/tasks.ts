/*
Modelo de tareas 

las tareas van a tener las siguiente extructura 

1--> nombre de tarea type string
2--> tipo de tarea  type string
3--> fecha de creacion type date
4--> si esta completada o no type booleano 

*/

// const taskSchema = new mongoose.Schema({
//   nameTask: { type: String },
//   category: { type: String },
//   completed: { type: String },
// });

// export = mongoose.model("Task", taskSchema);
import mongoose from "mongoose";
// import { mongoose } from "mongoose";

export interface InterfaceTaskSchema {
  nameTask: string;
  description: string;
  category: string;
  completed: Completed;
}

interface Completed {
  completed: boolean;
}

const Tasks = new mongoose.Schema(
  {
    nameTask: { type: String, required: true },
    description: { type: String },
    category: { type: String, required: true },
    completed: { type: Boolean, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model<InterfaceTaskSchema>("Task", Tasks);
