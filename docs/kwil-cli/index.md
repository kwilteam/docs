---
sidebar_position: 0
sidebar_label: "kwil-cli"
id: "kwil-cli"
title: "kwil-cli"
description: "Command line interface for using Kwil databases."
---

Command line interface for using Kwil databases.

The Kwil CLI is a command line interface for interacting with Kwil databases.  It can be used to deploy, update, and query databases.  It can also be used to generate documentation for Kwil databases.

The Kwil CLI can be configured with a persistent configuration file.  This file can be configured with the 'kwil-cli configure' command.  The Kwil CLI will look for a configuration file at `$HOME/.kwil-cli/config.json`.
	

### Options

```
      --chain-id string        The expected/intended Kwil Chain ID
  -h, --help                   help for kwil-cli
      --kwil-provider string   The Kwil provider endpoint (default "127.0.0.1:50051")
      --output output format   the format for command output, either 'text' or 'json' (default text)
      --private-key string     The private key of the wallet that will be used for signing
      --tls-cert-file string   The path to the TLS certificate, this is required if the kwil provider endpoint is using TLS
```

### Subqueries

* [kwil-cli configure](./configure)	 - Configure the Kwil CLI with persistent global settings.
* [kwil-cli database](./database)	 - The database command is a parent command containing subcommands for interacting with databases.
* [kwil-cli utils](./utils)	 - Various CLI utility commands.
* [kwil-cli version](./version)	 - Displays the kwil-cli version information.

