#!/usr/bin/env babel-node
/* eslint-disable no-console */
import { promisify } from "util";
import express from "express";

import createApolloServer from "./graphql";

const PORT = process.env.PORT || 4000;

const app = express();

const listen = promisify((port, fun) => app.listen(port, fun));

async function start() {
  app.use((req, res, next) => {
    console.log(`[${req.method}] ${req.path}`);
    next();
  });
  // Create the apollo server with mocks
  const server = await createApolloServer();
  // Mount the graphql middleware
  server.applyMiddleware({
    app,
    path: "/graphql_api",
    gui: { endpoint: "/graphql_api/graphiql" }
  });
  app.use((req, res) => {
    console.log(`Can't respond to ${req.url}`);
    if (req.body) console.log("Request body:", req.body);
    res.status(404).send();
  });
  await listen(PORT);
  console.log(`Mock server is listening on port ${PORT}`);
  console.log(`Apollo server mounted at http://localhost:${PORT}/graphql_api`);
}

start().catch(error => {
  console.error(error);
  process.exit(1);
});
