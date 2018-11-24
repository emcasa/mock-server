import { ApolloServer } from "apollo-server-express";
import { buildClientSchema, printSchema } from "graphql";
import { addMockFunctionsToSchema, makeExecutableSchema } from "graphql-tools";

import * as introspectionResult from "../../schema.json";
import resolvers from "./resolvers";
import mocks from "./mocks";

export function createSchema() {
  // Make a GraphQL schema with no resolvers
  const introspectionSchema = buildClientSchema(introspectionResult.data);
  const typeDefs = printSchema(introspectionSchema);
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
    resolverValidationOptions: {
      requireResolversForResolveType: false
    }
  });
  // Add mocks, modifies schema in place
  addMockFunctionsToSchema({ schema, mocks, preserveResolvers: true });
  return schema;
}

export default async function createApolloServer() {
  const schema = createSchema();
  return new ApolloServer({
    schema,
    introspection: true,
    playground: true,
    debug: true
  });
}
