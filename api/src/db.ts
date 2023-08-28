import "dotenv/config";
import { MongoClient, ServerApiVersion } from "mongodb";
import mongoose from "mongoose";

const PASSWORD = process.env.PASSWORD;
const USER = process.env.USER;

const uri = `mongodb+srv://${USER}:<${PASSWORD}>@cluster0.huncyta.mongodb.net/?retryWrites=true&w=majority`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

mongoose.connect(uri, {});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    numberPhone: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", UserSchema);

User.create({
  name: "dadadda",
  email: "email.com",
  phone: 301111111,
});

run().catch(console.dir);
