import { mergeResolvers } from "@graphql-tools/merge";
import { adminResolvers } from "./adminResolver";
import { profileResolvers } from "./profileResolver";
import { projectResolvers } from "./projectResolver";
import { skillResolvers } from "./skillResolver";
import { experienceResolvers } from "./experienceResolver";

export const resolvers = mergeResolvers([
  adminResolvers,
  profileResolvers,
  projectResolvers,
  skillResolvers,
  experienceResolvers
]);