import { UserModel } from "../models/userModel";


export const userController = {
  async getUsers() {
    return UserModel.find().exec();
  },
  async getUserById(id: string) {
    return UserModel.findById(id).exec();
  },
  async createUser(input: { name: string; email: string }) {
    return new UserModel(input).save();
  },
  async updateUser(id: string, input: { name?: string; email?: string }) {
    return UserModel.findByIdAndUpdate(id, input, { new: true }).exec();
  },
  async deleteUser(id: string) {
    return Boolean(await UserModel.findByIdAndDelete(id).exec());
  }
};