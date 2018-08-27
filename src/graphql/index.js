import path from "path";
import fs from "fs";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { makeExecutableSchema, addMockFunctionsToSchema } from "graphql-tools";

import mocks from "./mocks";

export async function createSchema() {
  const typeDefs = fs
    .readFileSync(path.join(__dirname, "../../schema.graphql"))
    .toString();
  // Make a GraphQL schema with no resolvers
  const schema = makeExecutableSchema({
    typeDefs
  });
  // Add mocks, modifies schema in place
  addMockFunctionsToSchema({ schema, mocks });
  return schema;
}

export default async function createApolloServer(options) {
  const schema = await createSchema();
  return new ApolloServer({
    schema,
    introspection: true,
    playground: true,
    debug: true
  });
}
