import { mergeTypeDefs } from "@graphql-tools/merge";
import { adminTypeDefs } from "./adminSchema";
import { profileTypeDefs } from "./profileSchema";
import { projectTypeDefs } from "./projectSchema";
import { skillTypeDefs } from "./skillSchema";
import { experienceTypeDefs } from "./experienceSchema";

export const typeDefs = mergeTypeDefs([
  adminTypeDefs,
  profileTypeDefs,
  projectTypeDefs,
  skillTypeDefs,
  experienceTypeDefs
]);