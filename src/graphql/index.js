import { ApolloServer } from "apollo-server-express";
import { buildClientSchema } from "graphql";
import { addMockFunctionsToSchema } from "graphql-tools";

import * as introspectionResult from "../../schema.json";
import mocks from "./mocks";

export function createSchema() {
  // Make a GraphQL schema with no resolvers
  const schema = buildClientSchema(introspectionResult.data);
  // Add mocks, modifies schema in place
  addMockFunctionsToSchema({ schema, mocks });
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
