export const experienceTypeDefs = /* GraphQL */ `
  type Experience {
    id: ID!
    title: String!
    company: String!
    location: String
    description: String!
    startDate: String!
    endDate: String
    current: Boolean!
    technologies: [String!]!
    createdAt: String
    updatedAt: String
  }

  input CreateExperienceInput {
    title: String!
    company: String!
    location: String
    description: String!
    startDate: String!
    endDate: String
    current: Boolean
    technologies: [String!]
  }

  input UpdateExperienceInput {
    title: String
    company: String
    location: String
    description: String
    startDate: String
    endDate: String
    current: Boolean
    technologies: [String!]
  }

  type Query {
    experiences: [Experience!]!
    experience(id: ID!): Experience
  }

  type Mutation {
    createExperience(input: CreateExperienceInput!): Experience!
    updateExperience(id: ID!, input: UpdateExperienceInput!): Experience
    deleteExperience(id: ID!): Boolean!
  }
`;

