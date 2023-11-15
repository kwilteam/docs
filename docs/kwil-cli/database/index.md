---
sidebar_position: 0
sidebar_label: "database"
id: "database"
title: "kwil-cli database"
description: "The database command is a parent command containing subcommands for interacting with databases."
---

The database command is a parent command containing subcommands for interacting with databases.

### Options

```
  -h, --help   help for database
```

### Options inherited from parent commands

```
      --chain-id string        The expected/intended Kwil Chain ID
      --kwil-provider string   The Kwil provider endpoint (default "127.0.0.1:50051")
      --output output format   the format for command output, either 'text' or 'json' (default text)
      --private-key string     The private key of the wallet that will be used for signing
      --tls-cert-file string   The path to the TLS certificate, this is required if the kwil provider endpoint is using TLS
```

### Subqueries

* [kwil-cli database batch](./batch)	 - Batch execute an action using inputs from a CSV file.
* [kwil-cli database call](./call)	 - Call a 'view' action, returning the result.
* [kwil-cli database deploy](./deploy)	 - Deploy a database schema to the target Kwil node.
* [kwil-cli database drop](./drop)	 - Drops a database from the connected network.
* [kwil-cli database execute](./execute)	 - Execute an action against a database.
* [kwil-cli database list](./list)	 - List databases owned by a wallet.
* [kwil-cli database query](./query)	 - Query a database using an ad-hoc SQL SELECT statement.
* [kwil-cli database read-schema](./read-schema)	 - Read schema is used to view the details of a deployed database schema.

