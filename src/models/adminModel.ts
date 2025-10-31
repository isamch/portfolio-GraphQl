import mongoose, { Schema, Document, Model } from "mongoose";

export interface AdminDocument extends Document {
  email: string;
  password: string;
}

const AdminSchema: Schema<AdminDocument> = new Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true }
  },
  { timestamps: true }
);

export const AdminModel: Model<AdminDocument> = mongoose.model<AdminDocument>("Admin", AdminSchema);

