export const profileTypeDefs = /* GraphQL */ `
  type Profile {
    id: ID!
    name: String!
    title: String!
    bio: String!
    email: String!
    phone: String
    location: String
    github: String
    linkedin: String
    twitter: String
    website: String
    avatar: String
    createdAt: String
    updatedAt: String
  }

  input UpdateProfileInput {
    name: String
    title: String
    bio: String
    email: String
    phone: String
    location: String
    github: String
    linkedin: String
    twitter: String
    website: String
    avatar: String
  }

  type Query {
    profile: Profile
  }

  type Mutation {
    updateProfile(input: UpdateProfileInput!): Profile!
  }
`;

