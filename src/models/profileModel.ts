import mongoose, { Schema, Document, Model } from "mongoose";

export interface ProfileDocument extends Document {
  name: string;
  title: string;
  bio: string;
  email: string;
  phone?: string;
  location?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
  avatar?: string;
}

const ProfileSchema: Schema<ProfileDocument> = new Schema(
  {
    name: { type: String, required: true },
    title: { type: String, required: true },
    bio: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    location: { type: String },
    github: { type: String },
    linkedin: { type: String },
    twitter: { type: String },
    website: { type: String },
    avatar: { type: String }
  },
  { timestamps: true }
);

export const ProfileModel: Model<ProfileDocument> = mongoose.model<ProfileDocument>("Profile", ProfileSchema);

