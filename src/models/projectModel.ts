import mongoose, { Schema, Document, Model } from "mongoose";

export interface ProjectDocument extends Document {
  title: string;
  description: string;
  image?: string;
  link?: string;
  github?: string;
  technologies: string[];
  featured: boolean;
}

const ProjectSchema: Schema<ProjectDocument> = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    link: { type: String },
    github: { type: String },
    technologies: { type: [String], default: [] },
    featured: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export const ProjectModel: Model<ProjectDocument> = mongoose.model<ProjectDocument>("Project", ProjectSchema);

