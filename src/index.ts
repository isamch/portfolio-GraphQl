import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import { graphqlHTTP } from "express-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { typeDefs } from "./schema/index";
import { resolvers } from "./resolvers/index";
import { connectToDatabase } from "./config/db";
import { getAdminFromToken, GraphQLContext } from "./middleware/auth";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Morgan logging
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));

const schema = makeExecutableSchema({ typeDefs, resolvers });

app.use(
  "/graphql",
  graphqlHTTP((request) => {
    const token = request.headers.authorization;
    const adminId = getAdminFromToken(token);

    const context: GraphQLContext = {
      adminId: adminId || undefined
    };

    return {
      schema,
      context,
      graphiql: process.env.NODE_ENV !== "production"
    };
  })
);


const port = process.env.PORT || 4000;

connectToDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`GraphQL server running on http://localhost:${port}/graphql`);
    });
  })
  .catch((err) => {
    console.error("Failed to start server:", err);
    process.exit(1);
  });