import mongoose from "mongoose";

const DB_URL = `mongodb://localhost:27017/TaskList`;

export const db = () => {
  const connect = () => {
    mongoose
      .connect(DB_URL, {
        family: 4,
      })
      .then((data) => console.log(`${data} is connected`))
      .catch((error) => console.log(error));
  };
  connect();
};

/* import "dotenv/config";
import { MongoClient, ServerApiVersion } from "mongodb";

const PASSWORD = process.env.PASSWORD;
const USER = process.env.USER;

const uri = `mongodb+srv://${USER}:${PASSWORD}@cluster0.huncyta.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

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
run().catch(console.dir); */
