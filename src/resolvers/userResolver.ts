import { userController } from "../controllers/userController";

export const userResolvers = {
  Query: {
    users: async () => userController.getUsers(),
    user: async (_: any, args: { id: string }) => userController.getUserById(args.id)
  },

  Mutation: {
    createUser: async (_: any, args: { input: { name: string; email: string } }) =>
      userController.createUser(args.input),
    updateUser: async (_: any, args: { id: string; input: { name?: string; email?: string } }) =>
      userController.updateUser(args.id, args.input),
    deleteUser: async (_: any, args: { id: string }) => userController.deleteUser(args.id)
  }
};