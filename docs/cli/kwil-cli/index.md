---
sidebar_position: 10
sidebar_label: "Reference"
id: "kwil-cli"
title: "kwil-cli"
description: "Command line interface for using Kwil databases."
slug: /ref/kwil-cli
---

## kwil-cli

Command line interface for using Kwil databases.

### Synopsis

Command line interface for using Kwil databases.

The Kwil CLI is a command line interface for interacting with Kwil databases.  It can be used to deploy, update, and query databases.  It can also be used to generate documentation for Kwil databases.

The Kwil CLI can be configured with a persistent configuration file.  This file can be configured with the 'kwil-cli configure' command.  The Kwil CLI will look for a configuration file at `$HOME/.kwil-cli/config.json`.
	

### Options

```
  -Y, --assume-yes           Assume yes for all prompts
      --chain-id string      the expected/intended Kwil Chain ID
      --config string        the path to the Kwil CLI persistent global settings file (default "/Users/brennanlamey/.kwil-cli/config.json")
  -h, --help                 help for kwil-cli
      --output string        the format for command output - either 'text' or 'json' (default "text")
      --private-key string   the private key of the wallet that will be used for signing
      --provider string      the Kwil provider RPC endpoint (default "http://127.0.0.1:8484")
  -S, --silence              Silence logs
```

### SEE ALSO

* [kwil-cli account](/docs/ref/kwil-cli/account)	 - Account related commands.
* [kwil-cli configure](/docs/ref/kwil-cli/configure)	 - Configure the Kwil CLI with persistent global settings.
* [kwil-cli database](/docs/ref/kwil-cli/database)	 - The database command is a parent command containing subcommands for interacting with databases.
* [kwil-cli utils](/docs/ref/kwil-cli/utils)	 - Various CLI utility commands.
* [kwil-cli version](/docs/ref/kwil-cli/version)	 - Displays the cli version information.

