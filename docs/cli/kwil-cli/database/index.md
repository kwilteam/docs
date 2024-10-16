---
sidebar_position: 99
sidebar_label: "database"
id: "kwil-cli-database"
title: "kwil-cli database"
description: "The database command is a parent command containing subcommands for interacting with databases."
slug: /ref/kwil-cli/database
---

## kwil-cli database

The database command is a parent command containing subcommands for interacting with databases.

### Synopsis

The database command is a parent command containing subcommands for interacting with databases.

### Options

```
  -h, --help   help for database
```

### Options inherited from parent commands

```
  -Y, --assume-yes           Assume yes for all prompts
      --chain-id string      the expected/intended Kwil Chain ID
      --config string        the path to the Kwil CLI persistent global settings file (default "/Users/brennanlamey/.kwil-cli/config.json")
      --output string        the format for command output - either 'text' or 'json' (default "text")
      --private-key string   the private key of the wallet that will be used for signing
      --provider string      the Kwil provider RPC endpoint (default "http://127.0.0.1:8484")
  -S, --silence              Silence logs
```

### SEE ALSO

* [kwil-cli](/docs/ref/kwil-cli)	 - Command line interface client for using Kwil.
* [kwil-cli database batch](/docs/ref/kwil-cli/database/batch)	 - Batch execute an action using inputs from a CSV file.
* [kwil-cli database call](/docs/ref/kwil-cli/database/call)	 - Call a 'view' action, returning the result.
* [kwil-cli database deploy](/docs/ref/kwil-cli/database/deploy)	 - Deploy a database schema to the target Kwil node.
* [kwil-cli database drop](/docs/ref/kwil-cli/database/drop)	 - Drops a database from the connected network.
* [kwil-cli database execute](/docs/ref/kwil-cli/database/execute)	 - Execute an action against a database.
* [kwil-cli database list](/docs/ref/kwil-cli/database/list)	 - List databases owned by a wallet.
* [kwil-cli database query](/docs/ref/kwil-cli/database/query)	 - Query a database using an ad-hoc SQL SELECT statement.
* [kwil-cli database read-schema](/docs/ref/kwil-cli/database/read-schema)	 - Read schema is used to view the details of a deployed database schema.

