---
sidebar_position: 0
sidebar_label: "utils"
id: "kwil-cli-utils"
title: "kwil-cli utils"
description: "Various CLI utility commands."
slug: /ref/kwil-cli/utils
---

## kwil-cli utils

Various CLI utility commands.

### Synopsis

Various CLI utility commands.

### Options

```
  -h, --help   help for utils
```

### Options inherited from parent commands

```
  -Y, --assume-yes             Assume yes for all prompts
      --chain-id string        the expected/intended Kwil Chain ID
      --kwil-provider string   the Kwil provider HTTP endpoint (default "http://localhost:8080")
      --output string          the format for command output - either 'text' or 'json' (default "text")
      --private-key string     the private key of the wallet that will be used for signing
  -S, --silence                Silence logs
```

### SEE ALSO

* [kwil-cli](/docs/ref/kwil-cli)	 - Command line interface for using Kwil databases.
* [kwil-cli utils authenticate](/docs/ref/kwil-cli/utils/authenticate)	 - Authenticate with a Kwil Gateway using a private key.
* [kwil-cli utils chain-info](/docs/ref/kwil-cli/utils/chain-info)	 - Display information about the connected Kwil network.
* [kwil-cli utils ping](/docs/ref/kwil-cli/utils/ping)	 - Ping the kwil provider endpoint.  If successful, returns 'pong'.
* [kwil-cli utils print-config](/docs/ref/kwil-cli/utils/print-config)	 - Print the current CLI configuration.
* [kwil-cli utils query-tx](/docs/ref/kwil-cli/utils/query-tx)	 - Queries a transaction from the blockchain. Requires 1 argument: the hex encoded transaction id.

