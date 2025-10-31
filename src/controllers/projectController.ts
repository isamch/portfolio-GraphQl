import { ProjectModel } from "../models/projectModel";

export const projectController = {
  async getProjects() {
    return ProjectModel.find().sort({ createdAt: -1 }).exec();
  },

  async getProjectById(id: string) {
    return ProjectModel.findById(id).exec();
  },

  async createProject(input: {
    title: string;
    description: string;
    image?: string;
    link?: string;
    github?: string;
    technologies?: string[];
    featured?: boolean;
  }) {
    return new ProjectModel(input).save();
  },

  async updateProject(id: string, input: {
    title?: string;
    description?: string;
    image?: string;
    link?: string;
    github?: string;
    technologies?: string[];
    featured?: boolean;
  }) {
    return ProjectModel.findByIdAndUpdate(id, input, { new: true }).exec();
  },

  async deleteProject(id: string) {
    await ProjectModel.findByIdAndDelete(id).exec();
    return true;
  }
};

