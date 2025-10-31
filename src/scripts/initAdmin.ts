import mongoose from "mongoose";
import dotenv from "dotenv";
import { connectToDatabase } from "../config/db";
import { AdminModel } from "../models/adminModel";
import { hashPassword } from "../utils/password";

dotenv.config();

async function initAdmin() {
  try {
    await connectToDatabase();
    console.log("Connected to database");

    // Check if admin already exists
    const existingAdmin = await AdminModel.findOne().exec();
    if (existingAdmin) {
      console.log("Admin already exists!");
      process.exit(0);
    }

    // Default admin credentials (change these!)
    const email = process.env.ADMIN_EMAIL || "admin@portfolio.com";
    const password = process.env.ADMIN_PASSWORD || "admin123";

    const hashedPassword = await hashPassword(password);

    const admin = new AdminModel({
      email,
      password: hashedPassword
    });

    await admin.save();
    console.log("✅ Admin created successfully!");
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    console.log("⚠️  Please change these credentials in production!");
    
    process.exit(0);
  } catch (error) {
    console.error("Error initializing admin:", error);
    process.exit(1);
  }
}

initAdmin();

