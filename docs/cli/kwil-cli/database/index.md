---
sidebar_position: 0
sidebar_label: "database"
id: "kwil-cli-database"
title: "kwil-cli database"
description: "The database command is a parent command containing subcommands for interacting with databases."
---

The database command is a parent command containing subcommands for interacting with databases.

### Options

```zshrc
  -h, --help   help for database
```

### Options inherited from parent commands

```zshrc
      --chain-id string        the expected/intended Kwil Chain ID
      --kwil-provider string   the Kwil provider gRPC endpoint (default "127.0.0.1:50051")
      --output text            the format for command output - either text or `json` (default "text")
      --private-key string     the private key of the wallet that will be used for signing
      --tls-cert-file string   the path to the TLS certificate (if the provider endpoint is using TLS)
```

### Subqueries

* [kwil-cli database batch](./kwil-cli-database-batch) - Batch execute an action using inputs from a CSV file.
* [kwil-cli database call](./kwil-cli-database-call) - Call a 'view' action, returning the result.
* [kwil-cli database deploy](./kwil-cli-database-deploy) - Deploy a database schema to the target Kwil node.
* [kwil-cli database drop](./kwil-cli-database-drop) - Drops a database from the connected network.
* [kwil-cli database execute](./kwil-cli-database-execute) - Execute an action against a database.
* [kwil-cli database list](./kwil-cli-database-list) - List databases owned by a wallet.
* [kwil-cli database query](./kwil-cli-database-query) - Query a database using an ad-hoc SQL SELECT statement.
* [kwil-cli database read-schema](./kwil-cli-database-read-schema) - Read schema is used to view the details of a deployed database schema.

