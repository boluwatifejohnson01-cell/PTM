import dotenv from "dotenv";

import express from "express"; // step-1: Import express framework after installation

import mongoose from "mongoose"; //step-9: Import mongoose after installation to be able to connect to mongoDB

// THIS WAS TO BY PASS ANY FIREWALL IN MY LAPTOP
import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import cors from "cors";

const app = express(); // step-2: activate express and put in a container called app
app.use(cors());

dotenv.config();

const port = 2100; // step-3: Define the port number for the server. cant give different servers the same port number since its the same laptop

import taskRouter from "./routes/taskRouter";

app.use(express.json());

app.use("/api/task", taskRouter);

// step-4: go to package.json under script and put "dev": nodemon app.ts to allow npm run dev work

// step-6: connect to mongoDB
// step-7: to connect to mongoDB first install mongoose
// step-8: listen to both the database and server together.
const start = async () => {
  await mongoose.connect(process.env.MONGO_URI!);
  console.log("Database connect successful");

  app.listen(port, () => {
    console.log(`server is running on PORT: ${port}`);
  }); //step-5: listen to the server after writing npm run dev
};

start();

// boluwatifejohnson01_db_user
// uJgSST04HqAp3a0r
// mongodb+srv://boluwatifejohnson01_db_user:uJgSST04HqAp3a0r@cluster0.vkwd8zd.mongodb.net/?appName=Cluster0

// server file: tis is where you run your server and connect to your database=> from app.js ==> the model file
// model files: this is used to define our data structure that will enter our database==> from the model file we go to the controller file
// controller files (business logic): this file is used to define what happens between request an response..==> from the controller files we go to the routes files
// Routes files: this defines the request type and the route for that particular request type. from here bck to the father ==> server files (app.js)

// other files includes: middleware files, utility files etc.
