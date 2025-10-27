import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { graphqlHTTP } from "express-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { typeDefs } from "./schema/index";
import { resolvers } from "./resolvers/index";
import { connectToDatabase } from "./config/db";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const schema = makeExecutableSchema({ typeDefs, resolvers });

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV !== "production"
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