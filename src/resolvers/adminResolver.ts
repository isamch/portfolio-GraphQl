import { adminController } from "../controllers/adminController";

export const adminResolvers = {
  Mutation: {
    login: async (_: any, args: { email: string; password: string }) => {
      return adminController.login(args.email, args.password);
    }
  }
};

