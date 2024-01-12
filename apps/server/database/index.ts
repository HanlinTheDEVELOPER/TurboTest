import mongoose from "mongoose";
import { projectSeed } from "./seed";

const mongodb: string = process.env.MONGO_URI || "";

mongoose.connect(mongodb);
const database = mongoose.connection;

database.on("error", (err) => console.log(err));

database.once("connected", () => {
  console.log("Connected to database");
  projectSeed();
});
