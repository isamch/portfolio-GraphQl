import mongoose, { Schema, Document, Model } from "mongoose";

export interface ExperienceDocument extends Document {
  title: string;
  company: string;
  location?: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  current: boolean;
  technologies: string[];
}

const ExperienceSchema: Schema<ExperienceDocument> = new Schema(
  {
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String },
    description: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    current: { type: Boolean, default: false },
    technologies: { type: [String], default: [] }
  },
  { timestamps: true }
);

export const ExperienceModel: Model<ExperienceDocument> = mongoose.model<ExperienceDocument>("Experience", ExperienceSchema);

