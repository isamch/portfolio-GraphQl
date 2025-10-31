import { profileController } from "../controllers/profileController";
import { GraphQLContext } from "../middleware/auth";

export const profileResolvers = {
  Query: {
    profile: async () => {
      return profileController.getProfile();
    }
  },

  Mutation: {
    updateProfile: async (
      _: any,
      args: { input: any },
      context: GraphQLContext
    ) => {
      if (!context.adminId) {
        throw new Error("Unauthorized: Admin access required");
      }
      return profileController.updateProfile(args.input);
    }
  }
};

