import { SkillModel } from "../models/skillModel";

export const skillController = {
  async getSkills() {
    return SkillModel.find().sort({ category: 1, name: 1 }).exec();
  },

  async getSkillById(id: string) {
    return SkillModel.findById(id).exec();
  },

  async createSkill(input: {
    name: string;
    level: number;
    category: string;
    icon?: string;
  }) {
    return new SkillModel(input).save();
  },

  async updateSkill(id: string, input: {
    name?: string;
    level?: number;
    category?: string;
    icon?: string;
  }) {
    return SkillModel.findByIdAndUpdate(id, input, { new: true }).exec();
  },

  async deleteSkill(id: string) {
    await SkillModel.findByIdAndDelete(id).exec();
    return true;
  }
};

