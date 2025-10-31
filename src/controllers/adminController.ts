import { AdminModel } from "../models/adminModel";
import { comparePassword } from "../utils/password";
import { generateToken } from "../utils/jwt";

export const adminController = {
  async login(email: string, password: string) {
    const admin = await AdminModel.findOne({ email }).exec();
    if (!admin) {
      throw new Error("Invalid email or password");
    }

    const isValid = await comparePassword(password, admin.password);
    if (!isValid) {
      throw new Error("Invalid email or password");
    }

    const adminId = String(admin._id);
    const token = generateToken({ adminId });

    return {
      token,
      admin: {
        id: adminId,
        email: admin.email
      }
    };
  }
};

