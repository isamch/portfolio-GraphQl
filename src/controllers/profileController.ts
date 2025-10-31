import { ProfileModel } from "../models/profileModel";

export const profileController = {
  async getProfile() {
    const profile = await ProfileModel.findOne().exec();
    if (!profile) {
      // Return default empty profile
      return null;
    }
    return profile;
  },

  async updateProfile(input: {
    name?: string;
    title?: string;
    bio?: string;
    email?: string;
    phone?: string;
    location?: string;
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
    avatar?: string;
  }) {
    let profile = await ProfileModel.findOne().exec();
    
    if (!profile) {
      // Create if doesn't exist
      profile = await new ProfileModel(input).save();
    } else {
      profile = await ProfileModel.findOneAndUpdate({}, input, { new: true }).exec();
    }

    return profile;
  }
};

