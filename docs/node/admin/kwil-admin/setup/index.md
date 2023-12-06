---
sidebar_position: 0
sidebar_label: "setup"
id: "kwil-admin-setup"
title: "kwil-admin setup"
description: "The `setup` command provides functions for creating and managing node configuration and data."
---

The `setup` command provides functions for creating and managing node configuration and data, including:
	- performing quick setup of a standalone Kwil node (init) and Kwil test networks (testnet)
	- updating genesis config with initial SQLite files (genesis-hash)
	- resetting node state and all data files (reset)

### Options

```
  -h, --help   help for setup
```

### Options inherited from parent commands

```
      --output text   the format for command output - either text or `json` (default "text")
  -S, --silence       Silence logs
```

### Subqueries

* [kwil-admin setup genesis-hash](./genesis-hash)	 - Compute genesis hash from SQLite files, and optionally update `genesis.json`.
* [kwil-admin setup init](./init)	 - The `init` command facilitates quick setup of an isolated Kwil node.
* [kwil-admin setup peer](./peer)	 - The `peer` command facilitates quick setup of a Kwil node as a peer to an existing node.
* [kwil-admin setup reset](./reset)	 - To delete all of a Kwil node's data files, use the `reset` command.
* [kwil-admin setup reset-state](./reset-state)	 - Delete blockchain state files.
* [kwil-admin setup testnet](./testnet)	 - The `testnet` command is used to create multiple node configurations, all with the same genesis config, and pre-configured to connect to each other.

