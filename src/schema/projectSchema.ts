export const projectTypeDefs = /* GraphQL */ `
  type Project {
    id: ID!
    title: String!
    description: String!
    image: String
    link: String
    github: String
    technologies: [String!]!
    featured: Boolean!
    createdAt: String
    updatedAt: String
  }

  input CreateProjectInput {
    title: String!
    description: String!
    image: String
    link: String
    github: String
    technologies: [String!]
    featured: Boolean
  }

  input UpdateProjectInput {
    title: String
    description: String
    image: String
    link: String
    github: String
    technologies: [String!]
    featured: Boolean
  }

  type Query {
    projects: [Project!]!
    project(id: ID!): Project
  }

  type Mutation {
    createProject(input: CreateProjectInput!): Project!
    updateProject(id: ID!, input: UpdateProjectInput!): Project
    deleteProject(id: ID!): Boolean!
  }
`;

