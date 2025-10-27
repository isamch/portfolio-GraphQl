import { mergeTypeDefs } from "@graphql-tools/merge";
import { userTypeDefs } from "./userSchema";

export const typeDefs = mergeTypeDefs([userTypeDefs]);