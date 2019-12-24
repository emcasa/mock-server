import { ApolloServer } from "apollo-server-express";
import { buildClientSchema, printSchema } from "graphql";
import { addMockFunctionsToSchema, makeExecutableSchema } from "graphql-tools";
import merge from 'merge-deep'

import * as introspectionResult from "../../schema.json";
import { decodeJwt } from "../helpers/jwt.js";
import resolvers from "./resolvers";
import mocks from "./mocks";

export function createSchema(options = {}) {
  // Make a GraphQL schema with no resolvers
  const introspectionSchema = buildClientSchema(introspectionResult.data);
  const typeDefs = printSchema(introspectionSchema);
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers: merge(resolvers, options.resolvers || {}),
    resolverValidationOptions: {
      requireResolversForResolveType: false
    }
  });
  // Add mocks, modifies schema in place
  addMockFunctionsToSchema({
    schema,
    mocks: merge(mocks, options.mocks || {}),
    preserveResolvers: true
  });
  return schema;
}

function parseJwt(header) {
  if (!header) return undefined;
  const [_, token] = header.split(" ", 2);
  return token ? decodeJwt(token) : undefined;
}

export default async function createApolloServer(options) {
  const schema = createSchema(options);
  return new ApolloServer({
    schema,
    context: async ({ req }) => ({
      user: parseJwt(req.get("authorization"))
    }),
    introspection: true,
    playground: true,
    debug: true
  });
}
