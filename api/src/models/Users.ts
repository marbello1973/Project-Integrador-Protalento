import mongoose from "mongoose";

export interface InterfaceUserSchema {
  role: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
}

const Users = new mongoose.Schema(

  {    
    name: { type: String, required: true },
    lastName: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },

    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model<InterfaceUserSchema>("User", Users);
