---
sidebar_position: 0
sidebar_label: "utils"
id: "utils"
title: "kwil-cli utils"
description: "Various CLI utility commands."
---

Various CLI utility commands.

### Options

```
  -h, --help   help for utils
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

* [kwil-cli utils chain-info](./chain-info)	 - Display information about the connected Kwil network.
* [kwil-cli utils ping](./ping)	 - Ping the kwil provider endpoint.  If successful, returns 'pong'.
* [kwil-cli utils print-config](./print-config)	 - Print the current CLI configuration.
* [kwil-cli utils query-tx](./query-tx)	 - Queries a transaction from the blockchain. Requires 1 argument: the hex encoded transaction id.

