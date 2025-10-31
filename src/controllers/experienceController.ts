import { ExperienceModel } from "../models/experienceModel";

export const experienceController = {
  async getExperiences() {
    return ExperienceModel.find().sort({ startDate: -1 }).exec();
  },

  async getExperienceById(id: string) {
    return ExperienceModel.findById(id).exec();
  },

  async createExperience(input: {
    title: string;
    company: string;
    location?: string;
    description: string;
    startDate: Date;
    endDate?: Date;
    current?: boolean;
    technologies?: string[];
  }) {
    return new ExperienceModel(input).save();
  },

  async updateExperience(id: string, input: {
    title?: string;
    company?: string;
    location?: string;
    description?: string;
    startDate?: Date;
    endDate?: Date;
    current?: boolean;
    technologies?: string[];
  }) {
    return ExperienceModel.findByIdAndUpdate(id, input, { new: true }).exec();
  },

  async deleteExperience(id: string) {
    await ExperienceModel.findByIdAndDelete(id).exec();
    return true;
  }
};

