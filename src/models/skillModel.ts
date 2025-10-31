import mongoose, { Schema, Document, Model } from "mongoose";

export interface SkillDocument extends Document {
  name: string;
  level: number; // 1-100
  category: string; // Frontend, Backend, Database, etc.
  icon?: string;
}

const SkillSchema: Schema<SkillDocument> = new Schema(
  {
    name: { type: String, required: true },
    level: { type: Number, required: true, min: 1, max: 100 },
    category: { type: String, required: true },
    icon: { type: String }
  },
  { timestamps: true }
);

export const SkillModel: Model<SkillDocument> = mongoose.model<SkillDocument>("Skill", SkillSchema);

