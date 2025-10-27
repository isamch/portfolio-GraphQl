import mongoose, { Schema, Document, Model } from "mongoose";

export interface UserDocument extends Document {
  name: string;
  email: string;
}


const UserSchema: Schema<UserDocument> = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true }
  },
  { timestamps: true }
);


export const UserModel: Model<UserDocument> = mongoose.model<UserDocument>("User", UserSchema);