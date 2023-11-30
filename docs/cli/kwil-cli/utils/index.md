---
sidebar_position: 0
sidebar_label: "utils"
id: "kwil-cli-utils"
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
      --chain-id string        the expected/intended Kwil Chain ID
      --kwil-provider string   the Kwil provider gRPC endpoint (default "127.0.0.1:50051")
      --output text            the format for command output - either text or `json` (default "text")
      --private-key string     the private key of the wallet that will be used for signing
      --tls-cert-file string   the path to the TLS certificate (if the provider endpoint is using TLS)
```

### Subqueries

* [kwil-cli utils chain-info](./kwil-cli-utils-chain-info) - Display information about the connected Kwil network.
* [kwil-cli utils ping](./kwil-cli-utils-ping) - Ping the kwil provider endpoint.  If successful, returns 'pong'.
* [kwil-cli utils print-config](./kwil-cli-utils-print-config) - Print the current CLI configuration.
* [kwil-cli utils query-tx](./kwil-cli-utils-query-tx) - Queries a transaction from the blockchain. Requires 1 argument: the hex encoded transaction id.
