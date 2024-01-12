import { Schema, model } from "mongoose";

const projectSchema = new Schema({
  name: {
    type: String,
  },
});

export default model("Project", projectSchema);
