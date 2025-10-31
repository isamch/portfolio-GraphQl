import { skillController } from "../controllers/skillController";
import { GraphQLContext } from "../middleware/auth";

export const skillResolvers = {
  Query: {
    skills: async () => {
      return skillController.getSkills();
    },
    skill: async (_: any, args: { id: string }) => {
      return skillController.getSkillById(args.id);
    }
  },

  Mutation: {
    createSkill: async (
      _: any,
      args: { input: any },
      context: GraphQLContext
    ) => {
      if (!context.adminId) {
        throw new Error("Unauthorized: Admin access required");
      }
      return skillController.createSkill(args.input);
    },
    updateSkill: async (
      _: any,
      args: { id: string; input: any },
      context: GraphQLContext
    ) => {
      if (!context.adminId) {
        throw new Error("Unauthorized: Admin access required");
      }
      return skillController.updateSkill(args.id, args.input);
    },
    deleteSkill: async (
      _: any,
      args: { id: string },
      context: GraphQLContext
    ) => {
      if (!context.adminId) {
        throw new Error("Unauthorized: Admin access required");
      }
      return skillController.deleteSkill(args.id);
    }
  }
};

