import { experienceController } from "../controllers/experienceController";
import { GraphQLContext } from "../middleware/auth";

export const experienceResolvers = {
  Query: {
    experiences: async () => {
      return experienceController.getExperiences();
    },
    experience: async (_: any, args: { id: string }) => {
      return experienceController.getExperienceById(args.id);
    }
  },

  Mutation: {
    createExperience: async (
      _: any,
      args: { input: any },
      context: GraphQLContext
    ) => {
      if (!context.adminId) {
        throw new Error("Unauthorized: Admin access required");
      }
      // Convert date strings to Date objects
      const input = {
        ...args.input,
        startDate: new Date(args.input.startDate),
        endDate: args.input.endDate ? new Date(args.input.endDate) : undefined
      };
      return experienceController.createExperience(input);
    },
    updateExperience: async (
      _: any,
      args: { id: string; input: any },
      context: GraphQLContext
    ) => {
      if (!context.adminId) {
        throw new Error("Unauthorized: Admin access required");
      }
      // Convert date strings to Date objects if provided
      const input = {
        ...args.input,
        startDate: args.input.startDate ? new Date(args.input.startDate) : undefined,
        endDate: args.input.endDate ? new Date(args.input.endDate) : undefined
      };
      return experienceController.updateExperience(args.id, input);
    },
    deleteExperience: async (
      _: any,
      args: { id: string },
      context: GraphQLContext
    ) => {
      if (!context.adminId) {
        throw new Error("Unauthorized: Admin access required");
      }
      return experienceController.deleteExperience(args.id);
    }
  }
};

