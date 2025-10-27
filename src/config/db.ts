import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function connectToDatabase(): Promise<void> {
  const mongoUri = process.env.MONGODB_URI;
  if (!mongoUri) {
    throw new Error("MONGODB_URI is not set in environment variables");
  }
  mongoose.set("strictQuery", true);
  await mongoose.connect(mongoUri);
}