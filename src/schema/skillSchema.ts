export const skillTypeDefs = /* GraphQL */ `
  type Skill {
    id: ID!
    name: String!
    level: Int!
    category: String!
    icon: String
    createdAt: String
    updatedAt: String
  }

  input CreateSkillInput {
    name: String!
    level: Int!
    category: String!
    icon: String
  }

  input UpdateSkillInput {
    name: String
    level: Int
    category: String
    icon: String
  }

  type Query {
    skills: [Skill!]!
    skill(id: ID!): Skill
  }

  type Mutation {
    createSkill(input: CreateSkillInput!): Skill!
    updateSkill(id: ID!, input: UpdateSkillInput!): Skill
    deleteSkill(id: ID!): Boolean!
  }
`;

