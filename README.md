# mock-server

EmCasa mock server for graphql.

## Setup

To run this project you'll need:

1. [asdf installed][asdf]
2. node and yarn

## Update schema

To update the schema execute the commands:

```bash
yarn install
yarn prepare-backend
yarn update-schema
```

**Remember to update the package version**.

## Publish server

To publish the new package execute:

```bash
yarn prepare
yarn publish
```

[asdf]: https://asdf-vm.com/guide/getting-started.html#_1-install-dependencies
