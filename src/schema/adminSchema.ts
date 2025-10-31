export const adminTypeDefs = /* GraphQL */ `
  type Admin {
    id: ID!
    email: String!
  }

  type LoginResponse {
    token: String!
    admin: Admin!
  }

  type Mutation {
    login(email: String!, password: String!): LoginResponse!
  }
`;

