---
sidebar_position: 99
sidebar_label: "setup"
id: "kwild-setup"
title: "kwild setup"
description: "Tools for creating and managing node configuration and data"
slug: /ref/kwild/setup
---

## kwild setup

Tools for creating and managing node configuration and data

### Synopsis

The `setup` command provides functions for creating and managing node configuration and data, including:
	- performing quick setup of a standalone Kwil node (`init`) and Kwil test networks (`testnet`)
	- resetting node state and all data files (`reset`)

### Options

```
  -h, --help   help for setup
```

### Options inherited from parent commands

```
      --output string   the format for command output - either 'text' or 'json' (default "text")
  -r, --root string     root directory (default "~/.kwild")
```

### SEE ALSO

* [kwild](/docs/ref/kwild)	 - Kwil daemon
* [kwild setup genesis](/docs/ref/kwild/setup/genesis)	 - Create a new genesis.json file
* [kwild setup init](/docs/ref/kwild/setup/init)	 - Generate configuration for a Kwil node.
* [kwild setup reset](/docs/ref/kwild/setup/reset)	 - Reset blockchain data and the application state.
* [kwild setup testnet](/docs/ref/kwild/setup/testnet)	 - Generate configuration for a new test network with multiple nodes

