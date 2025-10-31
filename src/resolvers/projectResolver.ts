import { projectController } from "../controllers/projectController";
import { GraphQLContext } from "../middleware/auth";

export const projectResolvers = {
  Query: {
    projects: async () => {
      return projectController.getProjects();
    },
    project: async (_: any, args: { id: string }) => {
      return projectController.getProjectById(args.id);
    }
  },

  Mutation: {
    createProject: async (
      _: any,
      args: { input: any },
      context: GraphQLContext
    ) => {
      if (!context.adminId) {
        throw new Error("Unauthorized: Admin access required");
      }
      return projectController.createProject(args.input);
    },
    updateProject: async (
      _: any,
      args: { id: string; input: any },
      context: GraphQLContext
    ) => {
      if (!context.adminId) {
        throw new Error("Unauthorized: Admin access required");
      }
      return projectController.updateProject(args.id, args.input);
    },
    deleteProject: async (
      _: any,
      args: { id: string },
      context: GraphQLContext
    ) => {
      if (!context.adminId) {
        throw new Error("Unauthorized: Admin access required");
      }
      return projectController.deleteProject(args.id);
    }
  }
};

