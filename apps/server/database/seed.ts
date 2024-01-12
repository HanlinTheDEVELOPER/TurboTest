import Project from "../models/project";

const projects = ["api", "mobile", "web"];

export const projectSeed = async () => {
  projects.map(async (name) => {
    const project = await Project.findOne({ name });
    if (!project) {
      await Project.create({ name });
    }
  });
  console.log("Projects seeded");
};
