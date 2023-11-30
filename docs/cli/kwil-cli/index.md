---
sidebar_position: 10
sidebar_label: "Reference"
id: "kwil-cli"
title: "kwil-cli"
description: "Command line interface for using Kwil databases."
---

Command line interface for using Kwil databases.

The Kwil CLI is a command line interface for interacting with Kwil databases.  It can be used to deploy, update, and query databases.  It can also be used to generate documentation for Kwil databases.

The Kwil CLI can be configured with a persistent configuration file.  This file can be configured with the 'kwil-cli configure' command.  The Kwil CLI will look for a configuration file at `$HOME/.kwil-cli/config.json`.
	

### Options

```
      --chain-id string        the expected/intended Kwil Chain ID
  -h, --help                   help for kwil-cli
      --kwil-provider string   the Kwil provider gRPC endpoint (default "127.0.0.1:50051")
      --output text            the format for command output - either text or `json` (default "text")
      --private-key string     the private key of the wallet that will be used for signing
      --tls-cert-file string   the path to the TLS certificate (if the provider endpoint is using TLS)
```

### Subqueries

* [kwil-cli configure](./kwil-cli-configure)	 - Configure the Kwil CLI with persistent global settings.
* [kwil-cli database](./database)	 - The database command is a parent command containing subcommands for interacting with databases.
* [kwil-cli utils](./utils)	 - Various CLI utility commands.
* [kwil-cli version](./kwil-cli-version)	 - Displays the cli version information.

