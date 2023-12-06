---
sidebar_position: 0
sidebar_label: "account"
id: "kwil-cli-account"
title: "kwil-cli account"
description: "Account related commands."
slug: /ref/kwil-cli/account
---

## kwil-cli account

Account related commands.

### Synopsis

Commands related to Kwil account, such as balance checks and transfers.

### Options

```
  -h, --help   help for account
```

### Options inherited from parent commands

```
  -Y, --assume-yes             Assume yes for all prompts
      --chain-id string        the expected/intended Kwil Chain ID
      --kwil-provider string   the Kwil provider gRPC endpoint (default "127.0.0.1:50051")
      --output string          the format for command output - either 'text' or 'json' (default "text")
      --private-key string     the private key of the wallet that will be used for signing
  -S, --silence                Silence logs
      --tls-cert-file string   the path to the TLS certificate (if the provider endpoint is using TLS)
```

### SEE ALSO

* [kwil-cli](/docs/ref/kwil-cli)	 - Command line interface for using Kwil databases.
* [kwil-cli account balance](/docs/ref/kwil-cli/account/balance)	 - Gets an account's balance and nonce
* [kwil-cli account transfer](/docs/ref/kwil-cli/account/transfer)	 - Transfer value to an account

